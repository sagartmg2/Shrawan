db.authors.insertOne({})


db.authors.insertMany([
    {
        name: " mr. python",
        age: 30,
        awards: ["grammy", "golden"],
        phone: "988",
        website: "htpp..."

    },
    {
        name: "mr. react",
        age: 100,
        awards: ["grammy", ""],
        books: [
            {
                title: "python"
            }
        ]

    },
    {
        name: "mr. js",
        age: 100,
        awards: ["golden", ""]

    },
    {
        name: "second hari",
        age: 100,
    }
])

db.authors.deleteMany({})


// db.authors.find(filter_object,select_object)

db.authors.find({ name: "ram" })
db.authors.find({ name: "Ram" })
db.authors.find({ name: "hari" })
db.authors.find({ name: RegExp("Ram", "i") })
db.authors.find({ name: RegExp("Ram", "i") }, { name: 1, _id: 0 })
db.authors.find({ name: /Ram/i })

db.authors.updateOne({ name: "ram" }, { name: "john" })
db.authors.updateOne({ name: "ram" }, { $set: { name: "john" } })
db.authors.updateMany()

db.authors.find({ id: 2 })
db.authors.updateOne({ id: 2 }, { $set: { id: 342 } })

db.authors.updateOne({ id: 2 }, { $inc: { id: 1 } })

// Array.filter9\())
// arr.filter(el => true)

db.authors.updateMany({}, { $rename: { name: "full_name" } })
db.authors.updateMany({}, { $unset: { id: 1 } })


db.authors.deleteMany({ full_name: "ram" })
db.authors.deleteMany({})


db.authors.find({ age: { $gt: 50 } }, { _id: 0 })
db.authors.find({ age: { $lt: 50 } }, { _id: 0 })
db.authors.find({ age: { $ne: 50 } }, { _id: 0 })
db.authors.find({ age: { $eq: 50 } }, { _id: 0 })
db.authors.find({ age: { $gte: 50 } }, { _id: 0 })
db.authors.find({ age: { $lte: 50 } }, { _id: 0 })

// 1 0 

db.authors.find({ age: { $lte: 50 } }, { _id: 0 }).sort({ age: -1, name: -1 })




db.authors.find({ awards: "grammy" })
db.authors.find({ awards: { $in: ["golden"] } })
db.authors.find({ awards: { $in: ["golden", "grammy"] } })
db.authors.find({ awards: { $in: ["golden", "grammy"] } })
db.authors.find({ name: { $nin: ["second ram", "grammy"] } })

// select from authros where awards has golden or grammy

/* 

    frontend
    backeend
        server  express
        database
*/

// db.authors.find({ awards: "grammy" || age > 50 })
// db.authors.find({ awards: "grammy"  &&  age > 50 })

// &&   

// db.authors.find({ awards: "grammy" })

db.authors.insertOne({
    name: "fifty",
    age: 50
})

db.authors.find({
    $and: [
        {
            awards: "grammy"
        },
        {
            age: { $gte: 50 }
        }
    ]
})

db.authors.find({
    $or: [
        {
            awards: "grammy"
        },
        {
            age: { $gte: 50 }
        }
    ]
})

db.authors.find({ awards: { $not: { $exists: 0 } } }).limit(25).skip(2)
db.authors.find({})
db.authors.find({}).skip(2)

//  aggegation pipeline
db.authors.find().sort({ age: 1 })




db.books.deleteMany({})

db.books.insertMany([
    {
        title: "python",
        author_id: ObjectId("636781caf1889bfa806bd36d"),
        author: {
            name: "mr.python",
            phone: "977"
        }
    },
    {
        title: "React",
        author: {
            name: "mr.react",
            phone: "977"
        },
        author_id: ObjectId("636781caf1889bfa806bd36e")

    },
    {
        title: "JS",
        _id: "secret"
    },
    {
        title: "ML",
        author_id: ObjectId("636781caf1889bfa806bd36d"),
        author: {
            name: "mr.python",
            phone: "977"
        }
    },
    {
        title: "DATA science",
        author_id: ObjectId("636781caf1889bfa806bd36d"),
        author: {
            name: "mr.python",
            phone: "977"
        }
    }
])

db.books.find({ title: "python" })
db.books.find({ _id: "secret" })


db.books.find({ _id: ObjectId("63677fbff1889bfa806bd363") })




/* 
    aggregation framework || aggregation pipeline

    => advance find 

*/

db.books.find({ author_id: "636781caf1889bfa806bd36d", title: "python" })

db.books.aggregate([{ title: "python" }])


// {
//     $match: { author_id: "636781caf1889bfa806bd36d" }
// },
// {
//     $match: { title: "python" }
// },
// {
//     $match: { author_id: ObjectId("636781caf1889bfa806bd36d") }
// },
// {
//     $match: { title: "python" }
// },

// {
//     $lookup: {
//         from: "authors",
//         localField: "author_id",
//         foreignField: "_id",
//         as: "author"
//     }
// },
// {
//     $unwind: "$author"
// },


db.books.aggregate([
    {
        $group:{_id:"$title"}
    }
])

db.books.aggregate([
    {
        $group:{_id:"$author.name",total:{$sum:1}}
    }
])

db.books.distinct("title")


obj = { name: "john" }


let key = "name"

obj.key







