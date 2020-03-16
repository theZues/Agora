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
const session = require('express-session');



app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret:"feedmeseymour",
    resave:false,
    saveUninitialized:false
}));

const productsController = require('./controllers/productsController.js');
app.use(productsController);
// you could put '/Project2',prod...) and take off /Project2 in controller

const usersController = require('./controllers/usersController.js');
app.use(usersController);

const sessionController = require('./controllers/sessionController.js');
app.use(sessionController);

app.get('/', (req, res) => {
    res.render('homepage.ejs');
})

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
