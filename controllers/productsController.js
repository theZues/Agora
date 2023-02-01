const express = require('express');
const router = express.Router();
const ProductSchema = require('../models/products.js');
const UpcomingProductSchema = require('../models/upcomingProducts.js')


router.delete('/Project2/new/:id', (req, res) => {
    UpcomingProductSchema.findByIdAndRemove(req.params.id, (error, data) => {
      res.redirect('/Project2/new');
    });
});


//=========will display an edit form for a single item============
router.get('/Project2/:id/edit', (req, res) => {
  UpcomingProductSchema.findById(req.params.id, (error, foundUpcomingProduct) => {
    res.render('project2/edit.ejs',
          {
            upcomingProduct:foundUpcomingProduct
          }
      );
  });

});

//===============takes user input and applies to product=============
router.put('/Project2/:id', (req, res) => {
    UpcomingProductSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
      res.redirect('/Project2/new');
    });
    // upcomingProducts[req.params.indexOfUpcomingProductsArray] = req.body;
});

//================about page===================
router.get('/Project2/about', (req, res) => {
    res.render('project2/about.ejs');
});

//===========Index Page==================
router.get('/Project2/', (req, res) => {
  ProductSchema.find({}, (error, allProductsFound) => {
    res.render('project2/index.ejs',
              {
                allProducts:allProductsFound
              }
        );
  })

});

//===========Page to show other model products==================
router.get('/Project2/new', (req, res) => {
  UpcomingProductSchema.find({}, (error, allUpcomingProducts) => {
    res.render('project2/new.ejs',
                {
                  upcomingProducts:allUpcomingProducts
                }
        );
    });
});


//===========Posts the edit changes==================
router.post('/Project2/new/', (req, res) => {
  UpcomingProductSchema.create(req.body, (error, createdProduct) => {
    // upcomingProducts.push(req.body);
    res.redirect('/Project2/new');
  });
});


//===========Show Page==================completed with schema
router.get('/Project2/:id', (req, res) => {
  ProductSchema.findById(req.params.id, (err, foundProduct) => {
    res.render('project2/show.ejs',
                {
                  product:foundProduct
                }
          );
      })

});



module.exports = router;
