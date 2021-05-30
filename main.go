package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/ChubachiPT21/paddle/internal/infrastructure/database"
	"github.com/ChubachiPT21/paddle/internal/infrastructure/repository"
	"github.com/ChubachiPT21/paddle/internal/routes/paddle"
	"github.com/ChubachiPT21/paddle/pkg/routes"
	_ "github.com/go-sql-driver/mysql"

	"github.com/ChubachiPT21/paddle/internal/usecase"
)

func main() {
	database.Init()

	r := gin.New()
	r.Use(cors.Default())

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
		paddle.GetSources(repository.NewSourceRepository())...,
	)
	routes.AddRoutes(
		v1,
		paddle.CreateSource(repository.NewSourceRepository())...,
	)
	routes.AddRoutes(
		v1,
		paddle.CreateFeeds(usecase.NewCreateFeedStruct())...,
	)
	routes.AddRoutes(
		v1,
		paddle.CreateInterest()...,
	)

	r.Run(":10330") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
