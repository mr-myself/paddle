CREATE TABLE IF NOT EXISTS users(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `username` varchar (50) UNIQUE NOT NULL,
    `password` varchar (50) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
