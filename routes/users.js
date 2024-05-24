var express = require("express");
var router = express.Router();

var users = [
  { name: "tj" },
  { name: "ciaran" },
  { name: "aaron" },
  { name: "guillermo" },
  { name: "simon" },
  { name: "tobi" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(users);
});

module.exports = router;
