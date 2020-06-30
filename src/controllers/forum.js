const Forum = require("../models/forum");


const createForum = (req,res) => {
    const body = req.body;
    console.log(body);
    const creator = body.nickname;
    const title = body.title;
    const forumBody = body.forumBody;
    const dateCreated = Date.now();

    let newForum = new Forum({
        title: title,
        body: forumBody,
        comments: [],
        creator: creator,
        dateCreated: dateCreated
    });
    
    console.log(newForum);

    newForum.save((err) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                errors: ["Server error"]
            })
        }

        res.json({
            message: "Forum created"
        })
    })
}

const getForums = (req, res) => {
    Forum.find({},"title creator dateCreated", (err, forumsDB) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                errors: ["Server error"]
            })
        }
        res.json({
            forums: forumsDB
        })
    })
}

const getForum = (req, res) => {
    const forumId = req.params.forumId;
    Forum.findById(forumId, (err, forumDB) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                errors: ["Server error"]
            })
        }
        forumDB.populate("comments", err => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    errors: ["Server error"]
                })
            }
            res.json({
                forums: forumsDB
            })
        })
    })
}


module.exports = {
    createForum,
    getForums,
    getForum
}