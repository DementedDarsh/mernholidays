const mongoose = require("mongoose");

const holidaySchema = new mongoose.Schema({
    name: {type: String, required: true},
    celebrated: {type: Boolean, default: false},
    description: {type: String},
    likes: {type: Number, default: 0},
    tags: [{type: String}]
});

module.exports = mongoose.model("Holiday", holidaySchema)