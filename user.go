type User struct {
	//ORMの確認
	//gorm.Model
    Email string `form:"email" binding:"required" gorm:"unique;not null"`
    Password string `form:"password" binding:"required"`
}

func createUser(email string, password string) []error {
    passwordEncrypt, _ := crypto.PasswordEncrypt(password)
    //db := gormConnect()
    defer db.Close()
    // Insert処理
    if err := db.Create(&User{Email: email, Password: passwordEncrypt}).GetErrors(); err != nil {
        return err
    }
    return nil

}