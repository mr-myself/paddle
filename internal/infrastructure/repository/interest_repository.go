package repository

import (
	"context"

	"github.com/mr-myself/paddle/internal/infrastructure/database"
	"github.com/mr-myself/paddle/internal/models"
	"github.com/mr-myself/paddle/pkg/orm"
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
