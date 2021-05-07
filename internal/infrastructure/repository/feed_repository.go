package repository

import (
	"context"

	"github.com/ChubachiPT21/paddle/internal/infrastructure/database"
	"github.com/ChubachiPT21/paddle/internal/models"
	"github.com/ChubachiPT21/paddle/pkg/orm"
	"github.com/mmcdole/gofeed"
	"github.com/volatiletech/null/v8"
	"github.com/volatiletech/sqlboiler/v4/boil"
	. "github.com/volatiletech/sqlboiler/v4/queries/qm"
)

type feedRepository struct {
}

// NewFeedRepository is a method to initialize the repository
func NewFeedRepository() models.FeedRepository {
	return &feedRepository{}
}

func (repo *feedRepository) All(sourceID int64) (orm.FeedSlice, error) {
	return orm.Feeds(
		Where("source_id = ?", sourceID),
	).All(context.Background(), database.DBCon)
}

func (repo *feedRepository) Create(sourceID int64, item *gofeed.Item) (*orm.Feed, error) {
	feed := orm.Feed{
		SourceID: sourceID,
		URL:      item.Link,
		Title:    item.Title,
		Contents: null.StringFrom(item.Description),
		ImageURL: null.StringFrom("https://dummyimage.com/600x400/000/fff"), // TODO:
	}
	err := feed.Insert(context.Background(), database.DBCon, boil.Infer())

	return &feed, err
}
