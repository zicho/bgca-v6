CREATE TABLE `logs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`details` text NOT NULL,
	`message` text,
	`level` text NOT NULL,
	`src` text,
	`context` text,
	`loggedByUser` text
);
