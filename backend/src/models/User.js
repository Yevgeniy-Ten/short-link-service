const {Types, model, Schema} = require("mongoose")

const User = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
    },
    links: [{type: Types.ObjectId, ref: "Link"}]
})

module.exports = model("User", User)