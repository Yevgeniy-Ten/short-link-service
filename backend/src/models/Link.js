const {Schema, model} = require("mongoose")

const Link = new Schema({
    main: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
})

module.exports = model("Link", Link)