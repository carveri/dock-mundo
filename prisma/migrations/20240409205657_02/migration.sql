/*
  Warnings:

  - You are about to drop the column `habitantes` on the `Pais` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Pais` table. All the data in the column will be lost.
  - Added the required column `contiId` to the `Pais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `habiPais` to the `Pais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombrePais` to the `Pais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pais` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pais` DROP COLUMN `habitantes`,
    DROP COLUMN `nombre`,
    ADD COLUMN `contiId` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `habiPais` INTEGER NOT NULL,
    ADD COLUMN `nombrePais` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Conti` (
    `id` VARCHAR(191) NOT NULL,
    `nombreConti` VARCHAR(191) NOT NULL,
    `habiConti` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ciudad` (
    `id` VARCHAR(191) NOT NULL,
    `nombreCiudad` VARCHAR(191) NOT NULL,
    `habiCiudad` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `paisId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pais` ADD CONSTRAINT `Pais_contiId_fkey` FOREIGN KEY (`contiId`) REFERENCES `Conti`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ciudad` ADD CONSTRAINT `Ciudad_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
