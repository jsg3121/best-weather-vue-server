-- CreateTable
CREATE TABLE `WeatherKoDaily` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `now_temperatures` INTEGER NOT NULL,
    `now_sky_state` VARCHAR(191) NOT NULL,
    `now_humidity` VARCHAR(191) NOT NULL,
    `now_precipitation` VARCHAR(191) NOT NULL,
    `today_precipitation_percent` INTEGER NOT NULL,
    `today_precipitation_shape` VARCHAR(191) NOT NULL,
    `today_minimum_temperatures` VARCHAR(191) NOT NULL,
    `today_maximum_temperatures` VARCHAR(191) NOT NULL,
    `today_find_dust` VARCHAR(191) NOT NULL,
    `today_ozon` VARCHAR(191) NOT NULL,
    `today_ultra_find_dust` VARCHAR(191) NOT NULL,
    `today_uv_index` VARCHAR(191) NOT NULL,
    `sky_state_on_three_hours` VARCHAR(191) NOT NULL,
    `temperatures_on_three_hours` VARCHAR(191) NOT NULL,
    `wind_direction_on_three_hours` VARCHAR(191) NOT NULL,
    `wind_speed_on_three_hours` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeatherKoWeekly` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `weekly_weather` VARCHAR(191) NOT NULL,
    `weekly_minimum_temperature` VARCHAR(191) NOT NULL,
    `weekly_maximum_temperature` VARCHAR(191) NOT NULL,
    `weekly_precipitation_percent` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeatherKoWeeklyHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `weekly_weather` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
