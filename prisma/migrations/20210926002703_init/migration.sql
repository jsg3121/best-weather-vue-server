/*
  Warnings:

  - Added the required column `gridX` to the `weather_geolocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gridY` to the `weather_geolocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `weather_geolocation` ADD COLUMN `gridX` FLOAT NOT NULL,
    ADD COLUMN `gridY` FLOAT NOT NULL;
