-- CreateTable
CREATE TABLE `weather_geolocation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullLocation` VARCHAR(50) NOT NULL,
    `location1` VARCHAR(30) NOT NULL,
    `location2` VARCHAR(30) NOT NULL,
    `location3` VARCHAR(30) NOT NULL,
    `locationCode` VARCHAR(50) NOT NULL,
    `weeklyLocatioCode` VARCHAR(50) NOT NULL,
    `weeklySkyLocationCode` VARCHAR(50) NOT NULL,
    `positionNx` DOUBLE NOT NULL,
    `positionNy` DOUBLE NOT NULL,
    `gridX` DOUBLE NOT NULL,
    `gridY` DOUBLE NOT NULL,
    `locationEncoding` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
