const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
     name: String,
})

module.exports = {
    schema,
    model: mongoose.model("Category", schema),
}