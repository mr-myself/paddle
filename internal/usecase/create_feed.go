package usecase

import (
	"fmt"
	"time"

	"github.com/ChubachiPT21/paddle/internal/infrastructure/repository"
	"github.com/mmcdole/gofeed"
	"github.com/otiai10/opengraph"
)

type CreateFeedInterface interface {
	CreateFeed(sourceID int64) error
}

type CreateFeedStruct struct {
}

func NewCreateFeedStruct() CreateFeedInterface {
	return &CreateFeedStruct{}
}

// CreateFeed is an usecase to create feeds from the source
func (CreateFeedStruct) CreateFeed(sourceID int64) error {
	sourceRepo := repository.NewSourceRepository()
	source, err := sourceRepo.Find(sourceID)

	if err != nil {
		return err
	}

	updateRepo := repository.NewUpdateRepository()
	update, err := updateRepo.Find(sourceID)

	if err != nil {
		return err
	}

	var latestDateTime time.Time
	if update != nil {
		latestDateTime = update.FetchedAt
	}

	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(source.URL)
	feedRepo := repository.NewFeedRepository()
	for _, item := range feed.Items {
		itemDateTime, err := time.Parse(time.RFC3339, item.Published)
		if err != nil {
			fmt.Println(err)
			continue
		}

		if latestDateTime.IsZero() || latestDateTime.Before(itemDateTime) {
			latestDateTime = itemDateTime
			ogp, err := opengraph.Fetch(item.Link)
			if err != nil {
				fmt.Println(err)
				continue
			}

			if len(ogp.Image) > 0 {
				_, err = feedRepo.Create(sourceID, item, ogp.Image[0].URL)
				if err != nil {
					fmt.Println(err)
					continue
				}
			} else {
				_, err = feedRepo.Create(sourceID, item, "")
				if err != nil {
					fmt.Println(err)
					continue
				}
			}
		}
	}

	if update != nil {
		if update.FetchedAt != latestDateTime {
			update.FetchedAt = latestDateTime
			err := updateRepo.Update(update)

			if err != nil {
				return err
			}
		}
	} else {
		_, err := updateRepo.Create(sourceID, latestDateTime)
		if err != nil {
			return err
		}
	}

	return nil
}
