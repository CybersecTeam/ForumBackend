const Comment = require("../models/comment");
const Forum = require("../models/forum");

const createComment = (req,res) => {
    const body = req.body;

    const creator = body.nickname;
    const content = body.content;
    const dateCreated = Date.now();
    const forum = body.forum;

    const newComment = new Comment({
        creator,
        content,
        dateCreated,
        forum
    });

    newComment.save((err, newCommentDB) => {
        if(err){
            return res.status(500).json({
                errors: ["Server error"]
            })
        }
        Forum.findById(forum, (err, forumDB) => {
            if(err){
                return res.status(500).json({
                    errors: ["Server error"]
                })
            }
            forumDB.comments.push(newCommentDB._id);
            forumDB.save((err, forumUpdatedDB) => {
                if(err){
                    return res.status(500).json({
                        errors: ["Server error"]
                    })
                }
                res.json({
                    forumUpdated: forumUpdatedDB,
                    comment: newCommentDB
                })
            })
        })
    })
}

module.exports = {
    createComment
}