CREATE TABLE IF NOT EXISTS feeds(
    `id` bigint(50) NOT NULL AUTO_INCREMENT,
    `source_id` bigint(20) NOT NULL,
    `url` varchar(255) NOT NULL,
    `title` varchar(255) NOT NULL,
    `contents` text,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `index_feeds_on_source_id` (`source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
