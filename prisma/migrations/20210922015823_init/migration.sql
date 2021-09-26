/*
  Warnings:

  - You are about to alter the column `positionNx` on the `weather_geolocation` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `positionNy` on the `weather_geolocation` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `weather_geolocation` MODIFY `positionNx` DOUBLE NOT NULL,
    MODIFY `positionNy` DOUBLE NOT NULL;
