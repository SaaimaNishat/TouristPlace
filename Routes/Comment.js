const express = require('express')
const router = express.Router()
const Post = require('../models/comments')

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find().limit(5);
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

router.get('/:PostId', async (req, res) => {
    try{
        const posts = await Post.find({ postId : req.params.PostId}).sort({date: -1}).limit(5)
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

router.post('/', async (req, res) => {
    const posts = new Post({
        postId: req.body.postId,
        comment: req.body.comment,
        userName: req.body.userName,
        rating: req.body.rating
    });
    try{
        const savedPost = await posts.save();
        res.json(savedPost);
    }
    catch(err) {
        res.sendStatus(404);
    }
})


router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({ postId : req.params.PostId, userName: req.params.userName})
        res.json(removedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})


module.exports = router;