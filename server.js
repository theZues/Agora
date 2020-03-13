const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;
const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
const methodOverride = require('method-override');
const product = require('./models/products.js');
const upcomingProducts = require('./models/upcomingProducts.js');

// const Product = require('./models/products.js')

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.delete('/Project2/new/:indexOfUpcomingProductsArray', (req, res) => {
    upcomingProducts.splice(req.params.indexOfUpcomingProductsArray);
    res.redirect('/Project2/new');
})

//will display an edit form for a single item
app.get('/Project2/:indexOfUpcomingProductsArray/edit', (req, res) => {
    res.render('edit.ejs',
          {
            upcomingProduct:upcomingProducts[req.params.indexOfUpcomingProductsArray],
            index: req.params.indexOfUpcomingProductsArray
          }
  );
});

app.put('/Project2/:indexOfUpcomingProductsArray', (req, res) => {
    upcomingProducts[req.params.indexOfUpcomingProductsArray] = req.body;
    res.redirect('/Project2/new');
})

//===========Index Page==================
app.get('/Project2/', (req, res) => {
    res.render('index.ejs',
              {
                allProducts:product
              }
        );
});

//===========Page to show other model products==================
app.get('/Project2/new', (req, res) => {
    res.render('new.ejs',
                {
                  allUpcomingProducts:upcomingProducts
                }
        );
});


//===========Posts the edit changes==================
app.post('/Project2/new/', (req, res) => {
    upcomingProducts.push(req.body);
    res.redirect('/Project2/new');
});


//===========Show Page==================
app.get('/Project2/:indexOfProductsArray', (req, res) => {
    res.render('show.ejs',
                {
                  products:product[req.params.indexOfProductsArray]
                }
          );
});


app.listen(process.env.PORT, (req, res) => {
  console.log(`listening on port ${process.env.PORT}`);
})


// Connect to Mongo
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: '));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log('Connection made!');
});
