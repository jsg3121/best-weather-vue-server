/*
  Warnings:

  - Added the required column `location3` to the `weather_geolocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weeklyLocatioCode` to the `weather_geolocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weeklySkyLocationCode` to the `weather_geolocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `weather_geolocation` ADD COLUMN     `location3` VARCHAR(30) NOT NULL,
    ADD COLUMN     `weeklyLocatioCode` VARCHAR(50) NOT NULL,
    ADD COLUMN     `weeklySkyLocationCode` VARCHAR(50) NOT NULL;
