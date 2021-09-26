-- CreateTable
CREATE TABLE `weather_daily` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `location` VARCHAR(255) NOT NULL,
    `precipitationState` VARCHAR(255) NOT NULL,
    `windDriections` VARCHAR(255) NOT NULL,
    `skyStatus` VARCHAR(255) NOT NULL,
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
    `location` VARCHAR(255) NOT NULL,
    `precipitationState` VARCHAR(255) NOT NULL,
    `skyStatus` VARCHAR(255) NOT NULL,
    `threeHoursTemperature` VARCHAR(255) NOT NULL,
    `precipitation6Hour` TINYINT NOT NULL,
    `snowLoad6Hour` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `weather_atmos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `location` VARCHAR(255) NOT NULL,
    `measuringStation` VARCHAR(255) NOT NULL,
    `dust1Hours` TINYINT NOT NULL,
    `minimumDust1Hours` TINYINT NOT NULL,
    `ozonRate` TINYINT NOT NULL,
    `uvRate` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `weather_weekly` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(255) NOT NULL,
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
