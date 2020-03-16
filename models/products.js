const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    img: String,
    name: String,
    link: String,
    details: String
});

const ProductSchema = mongoose.model('ProductSchema', productSchema);

module.exports = ProductSchema;




//======================original==============================================
// const product = [
//             {
//                 img:"https://i.ebayimg.com/images/g/v3gAAOSw~tteaq61/s-l64.jpg",
//                 name:"DVD Player",
//                 link:"http://ebay.us/YJNYoy?cmpnld=5338273189",
//                 details: "Sony BDP-S1700 Streaming Blu-ray Disc Player - Black. Condition is Used. It has the ability to stream a number of apps like Netflix, Hulu, etc with an ethernet connection.  Comes with remote and nine Blu-ray's.  It also has a USB connection for storage devices.  Sound is by Dolby TrueHD.  This was in impulse buy that I didn't need, lol.  It's only been used twice.  The Blu-ray's that are included are movies that I need to pass on because Amazon Prime."
//             },
//             {
//                 img:"https://i1.ebayimg.com/images/g/NJkAAOSw5oheasn-/s-l140.jpg",
//                 name:"PrideFC 15-DVD Set",
//                 link:"http://ebay.us/sPVoam?cmpnld=5338273189",
//                 details: "Lot of 15 Used Pride FC DVD's.  Condition is Used.  There are five 2-disc sets and one 5-disc set.  There are two DVD covers that are very worn, but the DVD's are in good condition.  They need a new home because I've watched them over and over, lol."
//             },
//             {
//                 img:"https://i.ebayimg.com/images/g/h-0AAOSw7MNeatIt/s-l64.jpg",
//                 name:"Wireless Hand-Controlled Drone",
//                 link:"http://ebay.us/YRhEbV?cmpnld=5338273189",
//                 details:"Blue Sky Wireless Hc1001004 XForce Motion Controlled Hand Controlled Drone. Condition is New. Shipped with USPS Priority Mail.  This is brand new.  Never opened."
//             }
//           ];
//
// module.exports = product;
