const Product = require('../models/Product')

module.exports.getAllProduct = async(req,res,next)=>{
    try {
        const products = await Product.find({})
  
      //Projection by property name
      //.find({},'name quantity -_id') 
  
      //filter by greater than or less than eqal for only greater the $gt
      //find({quantity:{$gte:40}}) 
  
      //filter by object property
      //.find({$or:[{_id:'63707cbaafeb7626e87a4310'},{name:"mango"},{status:{$ne:'out-of-stock'}}]});
      res.status(200).json({
        status:"success",
        data:products
      })
    } catch (error) {
        res.status(400).json({ 
            status:"fail",
            message:"Cant get the data",
            error:error.message
            
          })
    }
}
module.exports.createAProduct = async(req,res,next)=>{
    try {
        const product = req.body
        const result = await Product.create(product)
        res.status(200).json({status:"success",data:result})
        
    } catch (error) {
        res.status(400).json({success:'failed',message:'could not save a file error'})
    }
}