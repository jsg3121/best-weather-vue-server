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
    `positionNx` FLOAT NOT NULL,
    `positionNy` FLOAT NOT NULL,
    `gridX` FLOAT NOT NULL,
    `gridY` FLOAT NOT NULL,
    `locationEncoding` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `weather_daily` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `location` VARCHAR(50) NOT NULL,
    `precipitationState` VARCHAR(10) NOT NULL,
    `windDriections` VARCHAR(10) NOT NULL,
    `skyStatus` VARCHAR(10) NOT NULL,
    `temperature` TINYINT NOT NULL,
    `humidity` TINYINT NOT NULL,
    `precipitation1Hour` TINYINT NOT NULL,
    `minTemperature` TINYINT NOT NULL,
    `maxTemperature` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `weather_three_hours` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `location` VARCHAR(50) NOT NULL,
    `precipitationState` VARCHAR(10) NOT NULL,
    `skyStatus` VARCHAR(10) NOT NULL,
    `threeHoursTemperature` VARCHAR(10) NOT NULL,
    `precipitation6Hour` TINYINT NOT NULL,
    `snowLoad6Hour` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `weather_atmos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `location` VARCHAR(50) NOT NULL,
    `measuringStation` VARCHAR(10) NOT NULL,
    `dust1Hours` TINYINT NOT NULL,
    `minimumDust1Hours` TINYINT NOT NULL,
    `ozonRate` TINYINT NOT NULL,
    `uvRate` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `weather_weekly` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(50) NOT NULL,
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `day1` VARCHAR(255) NOT NULL,
    `day2` VARCHAR(255) NOT NULL,
    `day3` VARCHAR(255) NOT NULL,
    `day4` VARCHAR(255) NOT NULL,
    `day5` VARCHAR(255) NOT NULL,
    `day6` VARCHAR(255) NOT NULL,
    `day7` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
