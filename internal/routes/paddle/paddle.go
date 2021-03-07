package paddle

import (
	"fmt"
	"net/http"

	"strconv"

	"github.com/gin-gonic/gin"

	"github.com/mr-myself/paddle/internal/infrastructure/repository"
	"github.com/mr-myself/paddle/internal/usecase"
	"github.com/mr-myself/paddle/pkg/orm"
	"github.com/mr-myself/paddle/pkg/routes"
)

type getFeedsHandler struct {
}

type createSourceHandler struct {
}

type createFeedsHandler struct {
}

func (h *getFeedsHandler) handle(c *gin.Context) {
	sourceRepo := repository.NewSourceRepository()
	sources, err := sourceRepo.All()
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		c.JSON(http.StatusOK, sources)
	}
}

func (h *createSourceHandler) receive(c *gin.Context) {
	source := orm.Source{
		UserID: 1,
	}
	err := c.Bind(&source)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	sourceRepo := repository.NewSourceRepository()
	err = sourceRepo.Create(&source)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	c.JSON(http.StatusOK, nil)
}

func (*createFeedsHandler) receive(c *gin.Context) {
	sourceID, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	err = usecase.CreateFeed(sourceID)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		c.JSON(http.StatusOK, nil)
	}
}

// GetFeeds fetches all feeds from sourceID
func GetFeeds() routes.Routes {
	handler := new(getFeedsHandler)

	return routes.Routes{
		{
			Path:    "/",
			Method:  http.MethodGet,
			Handler: handler.handle,
		},
	}
}

// CreateSource creates a new source
func CreateSource() routes.Routes {
	handler := new(createSourceHandler)

	return routes.Routes{
		{
			Path:    "/sources",
			Method:  http.MethodPost,
			Handler: handler.receive,
		},
	}
}

// CreateFeeds creates feeds based on the source id
func CreateFeeds() routes.Routes {
	handler := new(createFeedsHandler)

	return routes.Routes{
		{
			Path:    "/sources/:id/feeds",
			Method:  http.MethodPost,
			Handler: handler.receive,
		},
	}
}
