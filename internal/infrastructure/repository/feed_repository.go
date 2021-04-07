package repository

import (
	"context"

	"github.com/mmcdole/gofeed"
	"github.com/mr-myself/paddle/internal/infrastructure/database"
	"github.com/mr-myself/paddle/internal/models"
	"github.com/mr-myself/paddle/pkg/orm"
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
	}
	err := feed.Insert(context.Background(), database.DBCon, boil.Infer())

	return &feed, err
}
