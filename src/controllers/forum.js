const Forum = require("../models/forum");

const createForum = (req, res) => {
  const body = req.body;
  const creator = body.nickname;
  const title = body.title;
  const forumBody = body.forumBody;
  const tags = body.tags;
  const dateCreated = Date.now();

  let newForum = new Forum({
    title,
    body: forumBody,
    comments: [],
    creator,
    dateCreated,
    tags,
  });

  newForum.save((err, newForum) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        errors: ["Server error"],
      });
    }

    res.json({
      message: "Forum created",
      forum: newForum,
    });
  });
};

const getForums = (req, res) => {
  Forum.find({}, "title creator dateCreated tags", (err, forumsDB) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        errors: ["Server error"],
      });
    }
    res.json({
      forums: forumsDB,
    });
  });
};

const getForum = (req, res) => {
  const forumId = req.params.forumId;
  Forum.findById(forumId, (err, forumDB) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        errors: ["Server error"],
      });
    }
    forumDB.populate("comments", (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          errors: ["Server error"],
        });
      }
      res.json({
        forums: forumsDB,
      });
    });
  });
};

module.exports = {
  createForum,
  getForums,
  getForum,
};
