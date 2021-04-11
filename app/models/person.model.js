const mongoose = require('mongoose');
 mongoose.plugin(require('meanie-mongoose-to-json'));

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
