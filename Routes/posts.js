const express = require('express')
const router = express.Router()
const Post = require('../models/posts')



router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

router.get('/home', async (req, res) => {
    try{
        const posts = await Post.find().sort({likes: -1}).limit(5);
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})



router.get('/:PostId', async (req, res) => {
    try{
        const posts = await Post.findById(req.params.PostId)
        res.json(posts)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})



router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})


router.patch('/:postId', async (req, res) => {
    try{
        const patchedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set: 
                {images: req.body.images}
            })
        res.json(patchedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})


router.patch('/like/:postId', async (req, res) => {
    try{
        const patchedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set: 
                {likes: req.body.likes}
            })
        res.json(patchedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})


router.patch('/dislike/:postId', async (req, res) => {
    try{
        const patchedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set: 
                {dislikes: req.body.dislikes}
            })
        res.json(patchedPost)
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

function getStringArray(props){
    return props.split('\n')
}

function getImagesArray(props){
    return props.split('././././')
}




router.post('/', async (req, res) => {
    const posts = new Post({
        place: req.body.place,
        details: getStringArray(req.body.details),
        images: getImagesArray(req.body.images),
        stars: req.body.stars,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        place_type: req.body.place_type
    });
    try{
        const savedPost = await posts.save();
        res.json(savedPost);
    }
    catch(err) {
        res.status(404);
    }
})


module.exports = router;