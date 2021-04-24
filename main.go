package main

import (
	"github.com/gin-gonic/gin"

	_ "github.com/go-sql-driver/mysql"
	"github.com/mr-myself/paddle/internal/infrastructure/database"
	"github.com/mr-myself/paddle/internal/infrastructure/repository"
	"github.com/mr-myself/paddle/internal/routes/paddle"
	"github.com/mr-myself/paddle/pkg/routes"
)

func main() {
	database.Init()

	r := gin.New()
	v1 := r.Group("/v1")
	routes.AddRoutes(
		v1,
		paddle.GetFeeds(repository.NewFeedRepository())...,
	)
	routes.AddRoutes(
		v1,
		paddle.GetPreview()...,
	)
	routes.AddRoutes(
		v1,
		paddle.GetSources()...,
	)
	routes.AddRoutes(
		v1,
		paddle.CreateSource()...,
	)
	routes.AddRoutes(
		v1,
		paddle.CreateFeeds()...,
	)
	routes.AddRoutes(
		v1,
		paddle.CreateInterest()...,
	)
	r.Run(":10330") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
