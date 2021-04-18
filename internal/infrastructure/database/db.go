package database

import (
	"database/sql"
)

var (
	// DBCon is a connection for the database
	DBCon *sql.DB
)

// Init is a method to initialize the database connection
func Init() {
	// https://qiita.com/daiki-murakami/items/c8f9df8defc937e185ee#go%E3%81%A8mysql%E3%82%92%E6%8E%A5%E7%B6%9A%E3%81%99%E3%82%8B
	db, _ := sql.Open("mysql", "apuser:password@tcp(db:3306)/paddle?charset=utf8&parseTime=true&loc=Asia%2FTokyo")
	DBCon = db
}
