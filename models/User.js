const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    uid: {
        unique: true,
        type: String
    },
    password: String,
    isadmin:Boolean,
})


const User = mongoose.model('User', userSchema,"user");
module.exports = User;