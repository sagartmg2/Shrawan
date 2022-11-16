const Product = require("../model/Product")

const index = async (req, res, next) => {
    // let price_from = req.
    // console.log(req.params)
    // console.log(req.query)
    // return;
    let price_from = parseFloat(req.query.price_from || 0)
    let price_to = parseFloat(req.query.price_to || 99999999)
    let search_term = req.query.search_term || "";


    let sort = { name: 1 };

    if (req.query.sort) {

        switch (req.query.sort) {
            case "nameasc":
                sort = { name: 1 }
                break;
            case "namedesc":
                sort = { name: -1 }
                break;
            default:
                sort = { name: 1 }
                break;
        }

    }

    console.log({ sort })




    let products = await Product.find({
        $or: [
            {
                name: { $regex: RegExp(search_term, "i") },
            },
            {
                brands: { $in: [RegExp(search_term, "i")] },
            }
        ],
        $and: [
            { price: { $gte: price_from } },
            { price: { $lte: price_to } },
        ]
    }).sort(sort);

    res.send({
        data: products
    })

}

const store = async (req, res, next) => {

    try {

        let product = await Product.create({ ...req.body, created_by: req.user._id })

        res.send({
            data: product
        })
    }
    catch (err) {
        next(err)
    }

}
const update = (req, res, next) => {
    res.send("list of produc ts...")

}
const remove = (req, res, next) => {
    res.send("list of produc ts...")

}

// obj = { a: "one", b: "two" }
// delete obj.a


module.exports = {
    index, store, update, remove
}