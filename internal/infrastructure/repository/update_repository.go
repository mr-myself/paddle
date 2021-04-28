package repository

import (
	"context"
	"time"

	"github.com/ChubachiPT21/paddle/internal/infrastructure/database"
	"github.com/ChubachiPT21/paddle/internal/models"
	"github.com/ChubachiPT21/paddle/pkg/orm"
	"github.com/volatiletech/sqlboiler/v4/boil"
	. "github.com/volatiletech/sqlboiler/v4/queries/qm"
)

type updateRepository struct {
}

// NewUpdateRepository is a method to initialize the repository
func NewUpdateRepository() models.UpdateRepository {
	return &updateRepository{}
}

func (repo *updateRepository) Find(sourceID int64) (*orm.Update, error) {
	return orm.Updates(
		Where("source_id = ?", sourceID),
	).One(context.Background(), database.DBCon)
}

func (repo *updateRepository) Create(sourceID int64, fetchedAt time.Time) (*orm.Update, error) {
	update := orm.Update{
		SourceID:  sourceID,
		FetchedAt: fetchedAt,
	}
	err := update.Insert(context.Background(), database.DBCon, boil.Infer())

	return &update, err
}

func (repo *updateRepository) Update(update *orm.Update) error {
	_, err := update.Update(context.Background(), database.DBCon, boil.Infer())
	return err
}
