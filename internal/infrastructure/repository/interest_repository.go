package repository

import (
	"context"

	"github.com/ChubachiPT21/paddle/internal/infrastructure/database"
	"github.com/ChubachiPT21/paddle/internal/models"
	"github.com/ChubachiPT21/paddle/pkg/orm"
	"github.com/volatiletech/sqlboiler/v4/boil"
)

type interestRepository struct {
}

// NewInterestRepository is a method to initialize the repository
func NewInterestRepository() models.InterestRepository {
	return &interestRepository{}
}

func (repo *interestRepository) Create(feedID int64) error {
	interest := orm.Interest{
		FeedID: feedID,
	}
	err := interest.Insert(context.Background(), database.DBCon, boil.Infer())

	return err
}
