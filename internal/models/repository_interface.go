package models

import (
	"time"

	"github.com/mmcdole/gofeed"
	"github.com/mr-myself/paddle/pkg/orm"
)

type FeedRepository interface {
	Create(sourceID int64, item *gofeed.Item) (*orm.Feed, error)
}

type SourceRepository interface {
	Find(sourceID int64) (*orm.Source, error)
	All() (orm.SourceSlice, error)
	Create(source *orm.Source) error
}

type UpdateRepository interface {
	Find(sourceID int64) (*orm.Update, error)
	Create(sourceID int64, fetchedAt time.Time) (*orm.Update, error)
	Update(update *orm.Update) error
}
