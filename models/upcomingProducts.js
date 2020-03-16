const mongoose = require('mongoose');

const upcomingProductSchema = new mongoose.Schema({
    img: String,
    name: String,
    details: String
});

const UpcomingProduct = mongoose.model('UpcomingProduct', upcomingProductSchema);

module.exports = UpcomingProduct;


// router.get('/seed', (req, res) => {
//   UpcomingProductSchema.create([
//                 {
//                     img: "/img/ufc.jpg",
//                     name:"Lot of 10 UFC DVD's",
//                     details: "Condition is Used.  I've watched these DVD's for so long that I don't need them anymore.  I would keep them as a collection, but I lost the other DVD's which would have completed the set."
//                 },
//                 {
//                     img:"/img/smallville.jpg",
//                     name:"Smallville Season 8",
//                     details: "Condition is Used.  I'm still a fan of the Smallville series, but it's time for this season to move on.  I only have this one left so have at it."
//                 },
//                 {
//                     img:"/img/megadeth.jpg",
//                     name:"Megadeth 13 album",
//                     details:"Condition is Used.  I've only played it a handful of times because I bought the album on Itunes also.  This would be a great addition to someone who's keeping all the cd's."
//                 }
//               ],
//               (err, data)=> {
//                 res.redirect('/Project2/new');
//               }
//   )
// });
