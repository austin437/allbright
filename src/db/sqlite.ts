const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");
import { Statement } from "sqlite3";

db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");
  db.run("CREATE TABLE `short-urls` (shortUrl TEXT UNIQUE, longUrl TEXT UNIQUE)");

  const stmt: Statement = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i);
  }
  stmt.finalize();
});

module.exports = db;
