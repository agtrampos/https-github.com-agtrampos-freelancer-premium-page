CREATE TABLE `emailLeads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`userId` int,
	`status` enum('new','converted','unsubscribed') NOT NULL DEFAULT 'new',
	`brevoContactId` varchar(100),
	`source` varchar(50) NOT NULL DEFAULT 'landing',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `emailLeads_id` PRIMARY KEY(`id`),
	CONSTRAINT `emailLeads_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `payments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`subscriptionId` int,
	`infinitepayId` varchar(100),
	`amount` decimal(10,2) NOT NULL,
	`currency` varchar(3) NOT NULL DEFAULT 'BRL',
	`status` enum('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
	`paymentMethod` varchar(50),
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `payments_id` PRIMARY KEY(`id`),
	CONSTRAINT `payments_infinitepayId_unique` UNIQUE(`infinitepayId`)
);
--> statement-breakpoint
CREATE TABLE `subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`status` enum('active','expired','cancelled','pending') NOT NULL DEFAULT 'pending',
	`startDate` timestamp NOT NULL DEFAULT (now()),
	`expiryDate` timestamp NOT NULL,
	`planType` varchar(50) NOT NULL DEFAULT 'premium',
	`price` decimal(10,2) NOT NULL,
	`currency` varchar(3) NOT NULL DEFAULT 'BRL',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subscriptions_id` PRIMARY KEY(`id`)
);
