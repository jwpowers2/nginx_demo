package main

import (
	"context"
	"log"
	"fmt"
	"os"
	"strconv"
	"math/rand"
	"github.com/go-redis/redis"
	"github.com/gofiber/fiber/v2"
)

type HotDogs struct {
	Count int `json:"count"`
	Api string `json:"api"`
}

func main() {
	client := redis.NewClient(&redis.Options{
		Addr:     "redis:6379", // Redis server address
		Password: "",               // No password
		DB:       0,                // Default DB
	})

	// Ping Redis to check the connection
	pong, err := client.Ping().Result()
	if err != nil {
		fmt.Println("Failed to connect to Redis:", err)
		return
	}
	fmt.Println("Connected to Redis:", pong)

	
    
    redisClient := NewRedis()
	app := fiber.New()
    
	app.Get("/api/hotdogs", func(c *fiber.Ctx) error {

		hotdogs := HotDogs{Count:0, Api:"api-1"}

		fmt.Println("hot dog GET")

		val, err := client.Get(context.Background(), "hotdogs").Result()
		if err != nil {
			fmt.Println("Failed to get key:", err)
			return
		}
	
		fmt.Println("Value for key 'hotdogs':", val)
        dogInt,_ := strconv.Atoi(val)
		if (val < 1000){
			dogInt = val
		}

		moreDogs := rand.Intn(5)
		dogInt += modeDogs
		dogString,_ := strconv.Itoa(dogInt)
		
		err = client.Set(context.Background(), "hotdogs", "dogString", 0).Err()
		if err != nil {
			fmt.Println("Failed to set key:", err)
			return
		}
		hotdogs.Count = dogInt
		return c.JSON(hotdogs)
	})
	log.Fatal(app.Listen("0.0.0.0:5000"))
}
