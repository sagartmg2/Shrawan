
const Order = require("../model/Order");
const Product = require("../model/Product");

const store = async (req, res, next) => {
    try {
        // let products = req.body.products.map(el => {

        //     return { ...el, price: e.quantity *  }
        // })

        let products  = [];

        for(product in req.body.products){
            let db_product = Product.findEl
        }



        
        let order = await Order.create({ products });
        res.send(order)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    store,
}