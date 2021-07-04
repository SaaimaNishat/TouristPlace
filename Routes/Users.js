const express = require('express')
const router = express.Router()
const Post = require('../models/signup')

router.post('/login', async (req, res) => {
    Post.find({email: req.body.email, password: req.body.password}, 'userName',function(err, docs){
        if(!docs.length)
        {
            res.sendStatus(404)
        }
        else
        {
            res.json(docs)
        }
    })
    }
);


router.get('/:PostId', async (req, res) => {
    try{
        const posts = await Post.find({ postId : req.params.PostId})
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

router.post('/addUser', (req, res) => {
    Post.find({email: req.body.email}, function(err, docs){
        if(err)
        {
            res.sendStatus(409)
        }
        if(docs.length)
        {
            res.sendStatus(409)
        }
        else
        {
            const posts = new Post({
                email: req.body.email,
                userName: req.body.userName,
                password: req.body.password
            });
            try{
                const savedPost = posts.save();
                res.json(savedPost);
            }
            catch(err) {
                res.sendStatus(404);
            }
        }
    })
    }
);



module.exports = router;