ALTER TABLE `users` DROP COLUMN `token`;

ALTER TABLE `users` RENAME COLUMN `encrypted_password` TO `password`;
ALTER TABLE `users` MODIFY `password` varchar (50) NOT NULL;

ALTER TABLE `users` RENAME COLUMN `email` TO `username`;
ALTER TABLE `users` MODIFY `username` varchar (50) UNIQUE NOT NULL;
