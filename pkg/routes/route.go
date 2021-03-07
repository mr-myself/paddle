package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

var (
	allowedMethods = map[string]bool{
		http.MethodGet:    true,
		http.MethodPost:   true,
		http.MethodPut:    true,
		http.MethodDelete: true,
	}
)

// Route represents type of Route
type Route struct {
	Path    string
	Method  string
	Handler func(c *gin.Context)
}

// Routes slice of Routes
type Routes []*Route

// AddRoutes attach routes into the router group
func AddRoutes(group *gin.RouterGroup, routes ...*Route) {
	for _, route := range routes {
		supported := allowedMethods[route.Method]
		if supported && route.Path != "" && route.Handler != nil {
			group.Handle(route.Method, route.Path, route.Handler)
		}
	}
}
