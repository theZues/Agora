const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/users.js');


router.get('/session/new', (req, res) => {
    res.render('session/new.ejs');
});

router.post('/session', (req, res) => {
    res.send('loggin in....');
});

module.exports = router;
