/*
  Warnings:

  - You are about to drop the column `name` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `types_id` on the `Links` table. All the data in the column will be lost.
  - You are about to drop the `Types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `img` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Links" DROP CONSTRAINT "Links_types_id_fkey";

-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "name",
ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Links" DROP COLUMN "types_id";

-- DropTable
DROP TABLE "Types";
