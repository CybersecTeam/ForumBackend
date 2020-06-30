const router = require("express").Router();
const forumController = require("../controllers/forum");

router.post(
  "/forum",
  forumController.createForum
);
module.exports = router;
