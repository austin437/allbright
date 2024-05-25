const { fetchDbQuery } = require("../repositories");
const express = require("express");
const router = express.Router();
import {
  DbQuery,
  NextFunction,
  Request,
  RequestBody,
  RequestParams,
  RequestQuery,
  Response,
  ResponseBody,
} from "../typings";

router.get(
  "/",
  async function (
    req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
    res: Response,
    next: NextFunction
  ) {
    const { query } = req;
    const shortUrl: string = query.shortUrl;
    const data: DbQuery = await fetchDbQuery(shortUrl);

    if (Boolean(data) === false) {
      return res.status(422).send({ error: `Unable to locate ${shortUrl}` });
    }

    return res.send({ data: data.longUrl });
  }
);

module.exports = router;
