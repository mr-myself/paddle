CREATE TABLE IF NOT EXISTS updates(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `source_id` bigint(20) NOT NULL,
    `fetched_at` datetime NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `index_updates_on_source_id` (`source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

