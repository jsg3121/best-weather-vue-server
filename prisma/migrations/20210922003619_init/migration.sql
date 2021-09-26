/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `weather_geolocation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullLocation` VARCHAR(255) NOT NULL,
    `location1` VARCHAR(255) NOT NULL,
    `location2` VARCHAR(255) NOT NULL,
    `locationCode` VARCHAR(255) NOT NULL,
    `positionNx` INTEGER NOT NULL,
    `positionNy` INTEGER NOT NULL,
    `locationEncoding` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
