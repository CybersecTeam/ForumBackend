const router = require("express").Router();
const forumController = require("../controllers/forum");

router.get(
  "/api/test",
  forumController.toTest
);
module.exports = router;
