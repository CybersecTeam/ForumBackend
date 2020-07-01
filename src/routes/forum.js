const router = require("express").Router();
const forumController = require("../controllers/forum");

router.post("/forum", forumController.createForum);

router.get("/forum", forumController.getForums);

router.get("/forum/:id", forumController.getForum);
module.exports = router;
