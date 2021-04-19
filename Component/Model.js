const mongoose = require("mongoose")

const cartSchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        location: {
            type: String,
        },
        age: {
            type: Number,
        }
    });

module.exports = mongoose.model("films", cartSchema);
