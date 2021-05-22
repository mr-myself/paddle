ALTER TABLE `users` RENAME COLUMN `username` TO `email`;
ALTER TABLE `users` MODIFY `email` varchar (255) UNIQUE NOT NULL;

ALTER TABLE `users` RENAME COLUMN `password` TO `encrypted_password`;
ALTER TABLE `users` MODIFY `encrypted_password` varchar (255);

ALTER TABLE `users` ADD COLUMN `token` varchar (255) NULL AFTER `encrypted_password`;
