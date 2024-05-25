const express = require("express");
const { createShortUrl } = require("../repositories/shorten");
const { isValidUrl } = require("../utils");
import { NextFunction, Request, Response } from "../typings";

const router = express.Router();

router.post(
  "/",
  async function (req: Request, res: Response, next: NextFunction) {
    const longUrl: string | null = req.body?.url;

    if (Boolean(longUrl) === false) {
      return res
        .status(400)
        .send({ error: `Please provide a url parameter in the request body` })
        .end();
    }

    if (isValidUrl(longUrl) === false) {
      return res.status(400).send({ error: `${longUrl} is not a valid URL` });
    }

    const shortUrl: string = await createShortUrl(longUrl);

    return res.send({ data: shortUrl });
  }
);

module.exports = router;
