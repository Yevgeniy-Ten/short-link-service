const {Schema, model, Types} = require("mongoose")

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
    },
    owner: {
        type: Types.ObjectId,
        required: true,
        ref: "User"
    }
})

module.exports = model("Link", Link)