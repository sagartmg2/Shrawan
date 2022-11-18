const Product = require("../model/Product")

const index = async (req, res, next) => {
    // let price_from = req.
    // console.log(req.params)
    // console.log(req.query)
    // return;
    let price_from = parseFloat(req.query.price_from || 0)
    let price_to = parseFloat(req.query.price_to || 99999999)
    let search_term = req.query.search_term || "";

    let page = parseInt(req.query.page || 1);
    let per_page = parseInt(req.query.per_page || 1)
    // let per_page = req.query.per_page || 25


    let sort = { name: 1 };

    if (req.query.sort) {

        switch (req.query.sort) {
            case "nameasc":
                sort = { name: 1 }
                break;
            case "namedesc":
                sort = { name: -1 }
                break;
            case "priceasc":
                sort = { price: 1 }
                break;
            case "pricedesc":
                sort = { price: -1 }
                break;
            default:
                sort = { name: 1 }
                break;
        }

    }

    let count = await Product.find({

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
    }).sort(sort)
        .limit(per_page)
        .skip(((page - 1) * per_page)).count()
        ;



    let products = await Product.aggregate([
        {
            $match: {
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
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "created_by",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        // {
        //     $limit: 1
        // }
        {
            $facet: {
                metadata: [{ $count: "total" }, { $addFields: { page: page, per_page: per_page } }],
                data: [{ $skip: ((page - 1) * per_page) }, { $limit: per_page },]
            }
        }
    ])

    // let total_products = await Product.find({}).count();

    res.send({
        data: products,
        // total: total_products
        count: count,
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
const update = async (req, res, next) => {

    try {

        let product = await Product.findByIdAndUpdate(req.params.id, { ...req.body }, {
            new: true,
            runValidators: true,
        })

        res.send({
            data: product
        })
    }
    catch (err) {
        next(err)
    }

}
const updateReview = async (req, res, next) => {

    try {

        let count = await Product.findOne({ "reviews.created_by": req.user._id }).count();
        let product;
        if (count == 0) {
            // create new review
            product = await Product.findByIdAndUpdate(req.params.id, {
                $push: { reviews: { ...req.body, created_by: req.user._id } }
            }, {
                new: true,
                runValidators: true,
            })
        } else {
            // update existing review.


            /* 
                let reviews =  []
                updated_reviews = [].filter(el => el.created_by != req.user._id)

                Product.update , reviews: updated_reviews..
            
            */

            product = await Product.findOneAndUpdate({ _id: req.params.id, "reviews.created_by": req.user._id }, {
                $set: { "reviews.$": { ...req.body, created_by: req.user._id } }
            }, {
                new: true,
                runValidators: true,
            })
        }


        res.send({
            data: product
        })
    }
    catch (err) {
        next(err)
    }

}
const remove = async (req, res, next) => {
    let status = await Product.findByIdAndDelete(req.params.id)

    res.send({
        data: status
    })


}

// obj = { a: "one", b: "two" }
// delete obj.a


module.exports = {
    index, store, update, remove, updateReview
}