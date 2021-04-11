const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    isEmployed: Boolean,
    location: String
},  {
    timestamps: true
});

PersonSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = mongoose.model('Person', PersonSchema);
