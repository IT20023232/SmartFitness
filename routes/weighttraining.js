const express = require('express');
const Wighttraining = require('../models/weighttraining');

const router =express.Router();


router.post('/weighttraining/save', async (req, res) => {
    try {
        let newWeighttraining = new Wighttraining(req.body);
        await newWeighttraining.save();
        return res.status(200).json({
            success: "saved successfully"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});


router.get('/weighttraining', async (req, res) => {
    try {
        const weighttraining = await Wighttraining.find().exec();
        return res.status(200).json({
            success: true,
            existingWeighttraining: weighttraining // Use the 'posts' variable instead of 'Posts'
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
});


router.get('/weighttraining/:id', async (req, res) => {
    try {
        const weighttraining = await Wighttraining.findById(req.params.id).exec();

        if (!weighttraining) {
            return res.status(404).json({
                message: "not found"
            });
        }

        return res.json({
            success: true,
            weighttraining
        });
    } catch (err) {
        return res.status(400).json({
            message: "unsuccessful",
            error: err.message
        });
    }
});


router.put('/weighttraining/update/:id', async (req, res) => {
    try {
        const updatedWeighttraining = await Wighttraining.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true } // This option returns the updated document
        );

        if (!updatedWeighttraining) {
            return res.status(404).json({
                error: "not found"
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


router.delete('/weighttraining/delete/:id', async (req, res) => {
    try {
        const deletedweighttraining = await Wighttraining.findByIdAndRemove(req.params.id).exec();

        if (!deletedweighttraining) {
            return res.status(404).json({
                message: "Delete unsuccessful, weighttraining not found"
            });
        }

        return res.json({
            message: "Delete successful",
            deletedweighttraining
        });
    } catch (err) {
        return res.status(400).json({
            message: "Delete unsuccessful",
            error: err.message
        });
    }
});


module.exports =router;