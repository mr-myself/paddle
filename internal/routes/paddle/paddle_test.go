package paddle

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/golang/mock/gomock"
	"github.com/mr-myself/paddle/internal/infrastructure/database"
	"github.com/mr-myself/paddle/internal/models"
	"github.com/stretchr/testify/assert"
)

func TestGetFeedsHandler_handle(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	m := models.NewMockFeedRepository(ctrl)
	m.EXPECT()

	t.Run("return 200", func(t *testing.T) {
		database.Init()
		routeStruct := GetFeeds()[0]

		fmt.Println(routeStruct)
		w := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(w)

		routeStruct.Handler(c)

		assert.Equal(t, http.StatusOK, w.Result().StatusCode)
	})
}
