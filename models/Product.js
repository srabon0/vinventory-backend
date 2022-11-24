const mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  discountPercentage: { type: Number, required: true, min: 0, max: 100 },
  rating: { type: Number, required: true, min: 0, max: 5 },
  stock: { type: Number, required: true, min: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [{ type: String, required: true }],
});

productSchema.pre('save',function(next){
    console.log('before saving')
    next()
})

const Product = mongoose.model('Product', productSchema)



module.exports = Product;