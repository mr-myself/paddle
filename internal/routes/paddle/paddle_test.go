package paddle_test

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/assert/v2"
	"github.com/golang/mock/gomock"
	"github.com/mr-myself/paddle/internal/models"
	"github.com/mr-myself/paddle/internal/routes/paddle"
	"github.com/mr-myself/paddle/pkg/orm"
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
