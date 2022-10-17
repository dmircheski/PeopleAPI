const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');

mongoose.plugin(toJson);

const PersonSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    isEmployed: Boolean,
    location: String
},  {
    timestamps: true
});

module.exports = mongoose.model('Person', PersonSchema);
