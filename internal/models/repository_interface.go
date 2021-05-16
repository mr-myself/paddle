package models

import (
	"time"

	"github.com/ChubachiPT21/paddle/pkg/orm"
	"github.com/mmcdole/gofeed"
)

// InterestRepository is an interface
type InterestRepository interface {
	Create(feedID int64) error
}

// FeedRepository is an interface
type FeedRepository interface {
	All(sourceID int64) (orm.FeedSlice, error)
	Create(sourceID int64, item *gofeed.Item, imageURL string) (*orm.Feed, error)
}

// SourceRepository is an interface
type SourceRepository interface {
	Find(sourceID int64) (*orm.Source, error)
	All() (orm.SourceSlice, error)
	Create(source *orm.Source) error
}

// UpdateRepository is an interface
type UpdateRepository interface {
	Find(sourceID int64) (*orm.Update, error)
	Create(sourceID int64, fetchedAt time.Time) (*orm.Update, error)
	Update(update *orm.Update) error
}
