-- CreateTable
CREATE TABLE `WeatherKo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoryWeatherKo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OpenWeatherMap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoryOpenWeatherMap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccuWeather` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoryAccuWeather` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `content` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HistoryWeatherKo` ADD FOREIGN KEY (`content`) REFERENCES `WeatherKo`(`content`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoryOpenWeatherMap` ADD FOREIGN KEY (`content`) REFERENCES `OpenWeatherMap`(`content`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoryAccuWeather` ADD FOREIGN KEY (`content`) REFERENCES `AccuWeather`(`content`) ON DELETE CASCADE ON UPDATE CASCADE;
