const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
     firstname: { type: String, required: true},
     lastname: { type: String, required: true},
     email: { type: String, required: true},
     password: { type: String, required: true},
     role: {type: String, required: false, default: "client"}
})

module.exports = {
    schema,
    model: mongoose.model("User", schema),
}