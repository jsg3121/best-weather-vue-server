/*
  Warnings:

  - You are about to alter the column `location` on the `weather_atmos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `measuringStation` on the `weather_atmos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `location` on the `weather_daily` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `precipitationState` on the `weather_daily` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `windDriections` on the `weather_daily` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `skyStatus` on the `weather_daily` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `fullLocation` on the `weather_geolocation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `location1` on the `weather_geolocation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.
  - You are about to alter the column `location2` on the `weather_geolocation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.
  - You are about to alter the column `locationCode` on the `weather_geolocation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `locationEncoding` on the `weather_geolocation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - You are about to alter the column `location` on the `weather_three_hours` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `precipitationState` on the `weather_three_hours` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `skyStatus` on the `weather_three_hours` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `threeHoursTemperature` on the `weather_three_hours` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(10)`.
  - You are about to alter the column `location` on the `weather_weekly` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `weather_atmos` MODIFY `location` VARCHAR(50) NOT NULL,
    MODIFY `measuringStation` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `weather_daily` MODIFY `location` VARCHAR(50) NOT NULL,
    MODIFY `precipitationState` VARCHAR(10) NOT NULL,
    MODIFY `windDriections` VARCHAR(10) NOT NULL,
    MODIFY `skyStatus` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `weather_geolocation` MODIFY `fullLocation` VARCHAR(50) NOT NULL,
    MODIFY `location1` VARCHAR(30) NOT NULL,
    MODIFY `location2` VARCHAR(30) NOT NULL,
    MODIFY `locationCode` VARCHAR(50) NOT NULL,
    MODIFY `locationEncoding` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `weather_three_hours` MODIFY `location` VARCHAR(50) NOT NULL,
    MODIFY `precipitationState` VARCHAR(10) NOT NULL,
    MODIFY `skyStatus` VARCHAR(10) NOT NULL,
    MODIFY `threeHoursTemperature` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `weather_weekly` MODIFY `location` VARCHAR(50) NOT NULL;
