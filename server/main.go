package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "021103"
	dbname   = "miniprojectdb"
)

func main() {
	dbinfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", dbinfo)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	app := fiber.New()
	app.Use(cors.New())

	app.Post("/register", RegisterHandler(db))
	app.Post("/login", LoginHandler(db))

	log.Fatal(app.Listen(":8080"))
}

type User struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}

func RegisterHandler(db *sql.DB) fiber.Handler {
	fmt.Println("Received user data:", user)
	return func(c *fiber.Ctx) error {
		var user User
		if err := c.BodyParser(&user); err != nil {
			fmt.Printf("Error in parsing user")
			return c.Status(http.StatusBadRequest).SendString(err.Error())
		}

		_, err := db.Exec("INSERT INTO login_info (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)", user.FirstName, user.LastName, user.Email, user.Password)
		if err != nil {
			fmt.Printf("Failed to register %v\n", err)
			return c.Status(http.StatusInternalServerError).SendString("Failed to register user")
		}

		return c.Status(http.StatusCreated).JSON(map[string]string{"message": "User registered successfully"})
	}
}

func LoginHandler(db *sql.DB) fiber.Handler {
	return func(c *fiber.Ctx) error {
		var user User
		if err := c.BodyParser(&user); err != nil {
			return c.Status(http.StatusBadRequest).SendString(err.Error())
		}

		var storedPassword string
		err := db.QueryRow("SELECT password FROM login_info WHERE email = $1", user.Email).Scan(&storedPassword)
		if err != nil {
			if err == sql.ErrNoRows {
				return c.Status(http.StatusNotFound).SendString("User not found")
			}
			return c.Status(http.StatusInternalServerError).SendString("Failed to retrieve user data")
		}

		if storedPassword != user.Password {
			return c.Status(http.StatusUnauthorized).SendString("Incorrect password")
		}

		return c.Status(http.StatusOK).JSON(map[string]string{"message": "User logged in successfully"})
	}
}
