const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
// const express = require('express');
// const app = express();
// const app = require('../index').app;

exports.signup = (req, res) => {
    const user = new User({
        login: req.body.login,
        password: req.body.password,
        admin: req.body.isAdmin
    });

    user.save(error => {
        if (error) {
            res.json({
                status: 'error',
                message: 'Something went wrong, cannot save user'
            })
        };
        res.json({
            status: 'success',
            message: 'user saved susscesfully',
            data: user
        });
    })
};

exports.login = (req, res) => {
    
    User.findOne({
        login: req.body.name
    }, (error, user) => {
        if(error) throw error;

        if(!user) {
            res.json({
                success: false,
                message: 'User not found'
            })
        } else if (user.password !== req.body.password) {
            res.json({
                success: false,
                message: 'Password is incorrect'
            })
        } else {
                  // if user is found and password is right
        // create a token with only our given payload
       // we don't want to pass in the entire user since that has the password

            const payload = {
                admin: user.admin
            };

            const token = jwt.sign(payload, app.get('superSecret'), {expiresIn: 1440});

            res.json({
                success: true,
                message: 'enjoy your token',
                token
            })
        }

  
    })
}