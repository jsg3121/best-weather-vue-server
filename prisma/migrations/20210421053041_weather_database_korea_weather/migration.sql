/*
  Warnings:

  - You are about to drop the column `now_temperatures` on the `WeatherKoDaily` table. All the data in the column will be lost.
  - You are about to drop the column `now_sky_state` on the `WeatherKoDaily` table. All the data in the column will be lost.
  - You are about to drop the column `now_humidity` on the `WeatherKoDaily` table. All the data in the column will be lost.
  - You are about to drop the column `now_precipitation` on the `WeatherKoDaily` table. All the data in the column will be lost.
  - You are about to drop the column `weekly_weather` on the `WeatherKoWeeklyHistory` table. All the data in the column will be lost.
  - Added the required column `history_weather` to the `WeatherKoWeeklyHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history_minimum_temperature` to the `WeatherKoWeeklyHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history_maximum_temperature` to the `WeatherKoWeeklyHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history_precipitation_percent` to the `WeatherKoWeeklyHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WeatherKoDaily` DROP COLUMN `now_temperatures`,
    DROP COLUMN `now_sky_state`,
    DROP COLUMN `now_humidity`,
    DROP COLUMN `now_precipitation`;

-- AlterTable
ALTER TABLE `WeatherKoWeeklyHistory` DROP COLUMN `weekly_weather`,
    ADD COLUMN     `history_weather` VARCHAR(191) NOT NULL,
    ADD COLUMN     `history_minimum_temperature` VARCHAR(191) NOT NULL,
    ADD COLUMN     `history_maximum_temperature` VARCHAR(191) NOT NULL,
    ADD COLUMN     `history_precipitation_percent` VARCHAR(191) NOT NULL;
