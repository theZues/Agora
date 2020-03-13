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
const product = require('./models/products.js');
// const Product = require('./models/products.js')


// app.get('/Project2/:indexOfProductsArray', (req, res) => {
//   Product.find(req.body, (error, products) => {
//     res.render('show.ejs',
//                 {
//                   product: products
//                 }
//             )
//       })
// });


app.get('/Project2/', (req, res) => {
  res.render('index.ejs',
              {
                allProducts:product
              }
        );
});

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
