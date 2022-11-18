
const Order = require("../model/Order");
const Product = require("../model/Product");
const User = require("../model/User")
const Mailjet = require('node-mailjet');
const sendMail = require("../utils/mailer");

const store = async (req, res, next) => {
    try {
        // let products = req.body.products.map(el => {

        //     return { ...el, price: e.quantity *  }
        // })

        let products = [];
        let sellers = [];

        for (product of req.body.products) {

            let db_product = await Product.findById(product.product_id)
            if (db_product) {
                sellers.push(db_product.created_by)
                products.push({
                    ...product,
                    price: db_product.price * product.quantity
                })
            }

        }


        let order = await Order.create({ products });

        /* 
        send mail to sellers
         */
        console.log(sellers)
        let seller_emails = [];
        for (seller of sellers) {
            let user = await User.findById(seller)
            // send email to user.email
            seller_emails.push(user.email)

            // const mailjet = new Mailjet({
            //     apiKey: process.env.MJ_APIKEY_PUBLIC || '280e1d729ab7b7e973564a1c8ffa9abf',
            //     apiSecret: process.env.MJ_APIKEY_PRIVATE || '365417e029f0a2ea8e9be50743e64bbe'
            // });

            // const request = mailjet
            //     .post('send', { version: 'v3.1' })
            //     .request({
            //         Messages: [
            //             {
            //                 From: {
            //                     Email: "dev.sagartmg@gmail.com",
            //                     Name: "sender"
            //                 },
            //                 To: [
            //                     {
            //                         Email: "tamangsagar70@gmail.com",
            //                         Name: "Sender"
            //                     }
            //                 ],
            //                 Subject: "an order has been placed.",
            //                 TextPart: "Dear seller, an order #__ has been palced. check it out.  ",
            //                 HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            //             }
            //         ]
            //     })

            // request
            //     .then((result) => {
            //         console.log(result.body)
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })

        }

        sendMail(seller_emails)


        res.send(order)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    store,
}