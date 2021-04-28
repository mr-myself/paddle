package paddle

import (
	"fmt"
	"net/http"

	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mmcdole/gofeed"

	"github.com/ChubachiPT21/paddle/internal/infrastructure/repository"
	"github.com/ChubachiPT21/paddle/internal/models"
	"github.com/ChubachiPT21/paddle/internal/usecase"
	"github.com/ChubachiPT21/paddle/pkg/orm"
	"github.com/ChubachiPT21/paddle/pkg/routes"
)

type getFeedsHandler struct {
	repo models.FeedRepository
}

type getSourcesHandler struct {
}

type createSourceHandler struct {
}

type createFeedsHandler struct {
}

type createInterestHandler struct {
}

type previewRequest struct {
	Url string `json:"url"`
}

func (h *getFeedsHandler) handle(c *gin.Context) {
	sourceID, err := strconv.ParseInt("1", 10, 64)

	feeds, err := h.repo.All(sourceID)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		c.JSON(http.StatusOK, feeds)
	}
}

// curl -X POST -H "Content-Type: application/json" -d '{"url":"https://b.hatena.ne.jp/hotentry/it.rss"}' localhost:10330/v1/preview
func (h *getFeedsHandler) preview(c *gin.Context) {
	fp := gofeed.NewParser()
	var previewRequest previewRequest
	c.BindJSON(&previewRequest)
	feed, err := fp.ParseURL(previewRequest.Url)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		c.JSON(http.StatusOK, feed)
	}
}

func (h *getSourcesHandler) handle(c *gin.Context) {
	sourceRepo := repository.NewSourceRepository()
	sources, err := sourceRepo.All()
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		fmt.Println(sources)
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

func (*createInterestHandler) receive(c *gin.Context) {
	feedID, err := strconv.ParseInt(c.Param("feed_id"), 10, 64)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	interestRepo := repository.NewInterestRepository()
	if err = interestRepo.Create(feedID); err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		c.JSON(http.StatusOK, nil)
	}
}

// GetFeeds fetches all feeds from sourceID
func GetFeeds(repo models.FeedRepository) routes.Routes {
	handler := getFeedsHandler{repo}

	return routes.Routes{
		{
			Path:    "/sources/:id/feeds",
			Method:  http.MethodGet,
			Handler: handler.handle,
		},
	}
}

// GetPreview fetches all feeds from url
func GetPreview() routes.Routes {
	handler := new(getFeedsHandler)

	return routes.Routes{
		{
			Path:    "/preview",
			Method:  http.MethodPost,
			Handler: handler.preview,
		},
	}
}

// GetSources shows all sources
func GetSources() routes.Routes {
	handler := new(getSourcesHandler)

	return routes.Routes{
		{
			Path:    "/sources",
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

// CreateInterest creates a association with the feed user opens the link
func CreateInterest() routes.Routes {
	handler := new(createInterestHandler)

	return routes.Routes{
		{
			Path:    "/sources/:id/feeds/:feed_id/interest",
			Method:  http.MethodPost,
			Handler: handler.receive,
		},
	}
}
