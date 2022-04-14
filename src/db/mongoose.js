// @ts-nocheck
const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    // @ts-ignore
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})






