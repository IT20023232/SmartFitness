const express = require('express');
const Posts = require('../models/posts');

const router =express.Router();

//save posts
router.post('/post/save', async (req, res) => {
    try {
        let newPost = new Posts(req.body);
        await newPost.save();
        return res.status(200).json({
            success: "Post saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

//get post
router.get('/post', async (req, res) => {
    try {
        const posts = await Posts.find().exec();
        return res.status(200).json({
            success: true,
            existingPosts: posts // Use the 'posts' variable instead of 'Posts'
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});

//update post
router.put('/post/update/:id', async (req, res) => {
    try {
        const updatedPost = await Posts.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true } // This option returns the updated document
        );

        if (!updatedPost) {
            return res.status(404).json({
                error: "Post not found"
            });
        }

        return res.status(200).json({
            success: "Update successful"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});


//post delete

router.delete('/post/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndRemove(req.params.id).exec();

        if (!deletedPost) {
            return res.status(404).json({
                message: "Delete unsuccessful, post not found"
            });
        }

        return res.json({
            message: "Delete successful",
            deletedPost
        });
    } catch (err) {
        return res.status(400).json({
            message: "Delete unsuccessful",
            error: err.message
        });
    }
});


module.exports =router;