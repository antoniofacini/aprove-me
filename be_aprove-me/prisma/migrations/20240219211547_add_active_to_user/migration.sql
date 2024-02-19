-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT,
    "refreshToken" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_User" ("id", "login", "password", "refreshToken", "token") SELECT "id", "login", "password", "refreshToken", "token" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
