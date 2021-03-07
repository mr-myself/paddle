CREATE TABLE IF NOT EXISTS interests(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `feed_id` bigint(20) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `index_interests_on_feed_id` (`feed_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
