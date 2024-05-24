var express = require("express");
var router = express.Router();

const db = require("../db/sqlite");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  db.serialize(function () {
    db.all("SELECT rowid AS id, info FROM lorem", (err, data) => {
      res.send({ data: data });
    });
  });
});

module.exports = router;
