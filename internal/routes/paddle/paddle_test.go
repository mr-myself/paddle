package paddle_test

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/ChubachiPT21/paddle/internal/models"
	"github.com/ChubachiPT21/paddle/internal/routes/paddle"
	"github.com/ChubachiPT21/paddle/pkg/orm"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/assert/v2"
	"github.com/golang/mock/gomock"
)

func TestGetFeedsHandler_handle(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mock := models.NewMockFeedRepository(ctrl)
	mock.EXPECT().All(gomock.Any()).DoAndReturn(func(_ int64) (orm.FeedSlice, error) {
		return orm.FeedSlice{}, nil
	})

	t.Run("return 200", func(t *testing.T) {
		routeStruct := paddle.GetFeeds(mock)[0]

		w := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(w)

		routeStruct.Handler(c)
		assert.Equal(t, http.StatusOK, w.Result().StatusCode)
	})
}

func TestGetSourcesHandler_handle(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mock := models.NewMockSourceRepository(ctrl)
	mock.EXPECT().All().DoAndReturn(func() (orm.SourceSlice, error) {
		return orm.SourceSlice{}, nil
	})

	t.Run("return 200", func(t *testing.T) {
		routeStruct := paddle.GetSources(mock)[0]

		w := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(w)

		routeStruct.Handler(c)
		assert.Equal(t, http.StatusOK, w.Result().StatusCode)
	})
}
