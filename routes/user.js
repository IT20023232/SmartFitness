const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
// Use a pre-save hook to hash the password before saving it to the database


router.post('/user/save', async (req, res) => {
    try {
        const { name, age, email, mobile, password } = req.body;

        // Hash the password before saving it
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            age,
            email,
            mobile,
            password: hashedPassword, // Save the hashed password
        });

        await newUser.save();

        return res.status(200).json({
            success: "User saved successfully"
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
});

router.post('/user/login', async (req, res) => {


    try {


        const { email, password } = req.body;




        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        

        if (!passwordMatch) {


            return res.status(400).json({ error: 'Invalid password' });
        }

        // Create and send a JWT (JSON Web Token) for authentication


        const token = jwt.sign({ _id: user._id }, 'your_secret_key_here');
        res.header('auth-token', token).json({ token });

    }

    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



module.exports = router;
