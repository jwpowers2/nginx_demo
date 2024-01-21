package main

import (
	"context"
	"log"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"github.com/gofiber/fiber/v2"
)
// MongoInstance contains the Mongo client and database objects
type MongoInstance struct {
	Client *mongo.Client
	Db     *mongo.Database
}

var mg MongoInstance

// Database settings (insert your own database name and connection URI)
const dbName = "hotdog"
const mongoURI = "mongodb://root:password@localhost:27017/" + dbName



// Connect configures the MongoDB client and initializes the database connection.
// Source: https://www.mongodb.com/docs/drivers/go/current/quick-start/
func Connect() error {

	

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(mongoURI))

	if err != nil {
		return err
	}

	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	db := client.Database(dbName)

	if err != nil {
		return err
	}

	mg = MongoInstance{
		Client: client,
		Db:     db,
	}

	return nil
}
type HotDogs struct {
	count int64
}


func main() {

	hotdogs := HotDogs{count:0}

	if err := Connect(); err != nil {
		log.Fatal(err)
	}
	// Fiber instance
	app := fiber.New()
    app.Get("/api/test", hello)
	// Routes
	app.Get("/api/hotdogs", func(c *fiber.Ctx) error {
		return c.JSON(hotdogs)
	})

	// Start server
	log.Fatal(app.Listen(":5000"))
}

// Handler
func hello(c *fiber.Ctx) error {
	return c.SendString("Hello, World 👋!")
}