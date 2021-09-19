const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const allSchema = new Schema({

    images: {
        type: String,
        required:[true,"Resim alanı boş olamaz"],
        trim:true,
    },
    title: {
        type: String,
        required:[true,"Başlık alanı boş olamaz"],
        trim:true,
    },
    description: {
        type: String,
        required:[true,"Açıklama alanı boş olamaz"],
        trim:true,
    },
    kisi_sayisi: {
        type: String,
        trim:true,
    },
    card_tag: {
        type: String,
        required:[true,"Tag alanı boş olamaz"],
        trim:true,
    },
    card_content: String,
    discord_url : {
        type: String,
        required:[true,"Discord Url alanı boş olamaz"],
        trim: true,
        maxlength: [60,"Lütfen geçerli bir Discord url giriniz."],
    },
    email: {
        type: String,
        trim:true,
    },
    isvalidate: Boolean,
    isvalidate2: Boolean,
    isvalidate3: Boolean,


})


const all = mongoose.model('all', allSchema,"all");
module.exports = all;