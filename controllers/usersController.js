const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/users.js');


router.get('/users/new', (req, res) => {
    res.render('users/new.ejs');
});

router.post('/users', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (error, createdUser) => {
        // res.send(createdUser); this was to check the object going into mongo
        res.redirect('/Project2/new')
    });
});


module.exports = router;
