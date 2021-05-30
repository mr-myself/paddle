package paddle

import (
	"fmt"
	"net/http"

	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mmcdole/gofeed"
	"github.com/otiai10/opengraph"

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
	repo models.SourceRepository
}

type createSourceHandler struct {
	repo models.SourceRepository
}

type createFeedsHandler struct {
	feed usecase.CreateFeedInterface
}

type createInterestHandler struct {
}

type previewRequest struct {
	Url string `json:"url"`
}

func (h *getFeedsHandler) handle(c *gin.Context) {
	sourceID, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	feeds, err := h.repo.All(sourceID)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		c.JSON(http.StatusOK, feeds)
	}
}

func (h *getFeedsHandler) preview(c *gin.Context) {
	fp := gofeed.NewParser()
	var previewRequest previewRequest
	c.BindJSON(&previewRequest)
	feed, err := fp.ParseURL(previewRequest.Url)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	}

	var ogpURLs []string
	for _, item := range feed.Items {
		ogp, err := opengraph.Fetch(item.Link)
		if err != nil {
			fmt.Println(err)
			continue
		}

		if len(ogp.Image) > 0 {
			ogpURLs = append(ogpURLs, ogp.Image[0].URL)
		} else {
			fmt.Printf("%v", ogp.Image)
		}
	}

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
	} else {
		c.JSON(http.StatusOK, ogpURLs)
	}
}

func (h *getSourcesHandler) handle(c *gin.Context) {
	sources, err := h.repo.All()
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

	err = h.repo.Create(&source)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	c.JSON(http.StatusOK, nil)
}

func (h *createFeedsHandler) receive(c *gin.Context) {
	sourceID, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	err = h.feed.CreateFeed(sourceID)
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
func GetSources(repo models.SourceRepository) routes.Routes {
	handler := getSourcesHandler{repo}

	return routes.Routes{
		{
			Path:    "/sources",
			Method:  http.MethodGet,
			Handler: handler.handle,
		},
	}
}

// CreateSource creates a new source
func CreateSource(repo models.SourceRepository) routes.Routes {
	handler := createSourceHandler{repo}

	return routes.Routes{
		{
			Path:    "/sources",
			Method:  http.MethodPost,
			Handler: handler.receive,
		},
	}
}

// CreateFeeds creates feeds based on the source id
func CreateFeeds(feed usecase.CreateFeedInterface) routes.Routes {
	handler := createFeedsHandler{feed}

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
