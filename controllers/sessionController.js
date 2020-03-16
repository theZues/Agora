const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/users.js');


router.get('/session/new', (req, res) => {
    res.render('session/new.ejs');
});

router.post('/session', (req, res) => {
    User.findOne({username: req.body.username}, (error, foundUser) => {
        if(foundUser === null){
          res.redirect('/session/new');
        } else {
          const doesPasswordMatch = bcrypt.compareSync(req.body.password,foundUser.password);
          if(doesPasswordMatch){
            req.session.user = foundUser;
            res.redirect('/Project2/new');
          } else{
          res.redirect('/session/new');
        }
      }
  });
});

module.exports = router;
