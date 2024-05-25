const db = require("../db/sqlite");
import { ErrorStatus, DbQuery } from "../typings";

export async function fetchDbQuery(shortUrl: string): Promise<Object> {
  return new Promise((resolve, reject) => {
    db.serialize(function () {
      db.get(
        "SELECT longUrl FROM `short-urls` WHERE shortUrl=?",
        shortUrl,
        (err: ErrorStatus, data: DbQuery) => {
          if (Boolean(err)) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  });
}
