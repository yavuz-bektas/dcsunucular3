const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const yorumlarSchema = new Schema({
    commentitle: {
        type: String,
        required:[true,"Başlık alanı boş olamaz"],
        trim:true,
    },
    commentdesc: {
        type: String,
        required:[true,"Yorum alanı boş olamaz"],
        trim:true,
    },
    konuid: {
        type: String,
        required:[true,"konuiderror"],
        trim:true,
    },

    isvalidate: Boolean,
    isvalidate2: Boolean,
    isvalidate3: Boolean,

},{timestamps:true})


const Yorumlars = mongoose.model('Yorumlars', yorumlarSchema,"yorumlar");
module.exports = Yorumlars;