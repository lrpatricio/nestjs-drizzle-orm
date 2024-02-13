CREATE TABLE `products` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`price` decimal NOT NULL,
	`quantity` decimal NOT NULL,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
