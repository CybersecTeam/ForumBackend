const Forum = req('../models/forum');


const createForum = (req,res) => {
    const body = req.body;
    const creator = body.nickname;
    const title = body.title;
    const forumBody = body.forumBody;
    const dateCreated = Date.now();

    const newForum = new Forum({
        title,
        body: forumBody,
        comments: [],
        creator,
        dateCreated
    });
    
    newForum.save((err) => {
        if(err){
            return res.status(500).json({
                errors: ["Server error"]
            })
        }

        res.json({
            message: "Forum created"
        })
    })
}

module.exports = {
    createForum 
}