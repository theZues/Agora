const express = require('express');
const router = express.Router();
const product = require('../models/products.js');
const upcomingProducts = require('../models/upcomingProducts.js');

router.delete('/Project2/new/:indexOfUpcomingProductsArray', (req, res) => {
    upcomingProducts.splice(req.params.indexOfUpcomingProductsArray);
    res.redirect('/Project2/new');
})

//=========will display an edit form for a single item============
router.get('/Project2/:indexOfUpcomingProductsArray/edit', (req, res) => {
    res.render('project2/edit.ejs',
          {
            upcomingProduct:upcomingProducts[req.params.indexOfUpcomingProductsArray],
            index: req.params.indexOfUpcomingProductsArray
          }
      );
});

//===============takes user input and applies to product=============
router.put('/Project2/:indexOfUpcomingProductsArray', (req, res) => {
    upcomingProducts[req.params.indexOfUpcomingProductsArray] = req.body;
    res.redirect('/Project2/new');
})

//===========Index Page==================
router.get('/Project2/', (req, res) => {
    res.render('project2/index.ejs',
              {
                allProducts:product
              }
        );
});

//===========Page to show other model products==================
router.get('/Project2/new', (req, res) => {
    res.render('project2/new.ejs',
                {
                  allUpcomingProducts:upcomingProducts
                }
        );
});


//===========Posts the edit changes==================
router.post('/Project2/new/', (req, res) => {
    upcomingProducts.push(req.body);
    res.redirect('/Project2/new');
});


//===========Show Page==================
router.get('/Project2/:indexOfProductsArray', (req, res) => {
    res.render('project2/show.ejs',
                {
                  products:product[req.params.indexOfProductsArray]
                }
          );
});



module.exports = router;
