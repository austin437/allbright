const { generateShortUrl } = require("../utils");
const db = require("../db/sqlite");
import { Statement } from "sqlite3";

export async function createShortUrl(longUrl: string) {
  return new Promise((resolve, reject) => {
    const shortUrl: string = generateShortUrl();

    db.serialize(function () {
      try {
        const stmt: Statement = db.prepare(
          "INSERT INTO `short-urls` VALUES (?,?)"
        );
        stmt.run(shortUrl, longUrl);
        stmt.finalize();

        resolve(shortUrl);
      } catch (e) {
        reject(e);
      }
    });
  });
}
