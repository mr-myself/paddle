package repository

import (
	"context"

	"github.com/mr-myself/paddle/internal/infrastructure/database"
	"github.com/mr-myself/paddle/internal/models"
	"github.com/mr-myself/paddle/pkg/orm"
	"github.com/volatiletech/sqlboiler/v4/boil"
	. "github.com/volatiletech/sqlboiler/v4/queries/qm"
)

type sourceRepository struct {
}

// NewSourceRepository is a method to initialize the repository
// We should add user_id or joins sources table
func NewSourceRepository() models.SourceRepository {
	return &sourceRepository{}
}

func (repo *sourceRepository) Find(sourceID int64) (*orm.Source, error) {
	return orm.Sources(
		Where("id = ?", sourceID),
	).One(context.Background(), database.DBCon)
}

func (repo *sourceRepository) All() (orm.SourceSlice, error) {
	return orm.Sources().All(context.Background(), database.DBCon)
}

func (repo *sourceRepository) Create(source *orm.Source) error {
	return source.Insert(context.Background(), database.DBCon, boil.Infer())
}
