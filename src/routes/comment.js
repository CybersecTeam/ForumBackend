const router = require("express").Router();
const commentController = require("../controllers/comment");

router.post(
  "/comment",
  commentController.createComment
);
module.exports = router;
