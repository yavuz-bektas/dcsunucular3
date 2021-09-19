const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const top50Schema = new Schema({
    images: String,
    title: String,
    description: String,
    urls: String,
    kisi_sayisi: String,
    card_tag: String,
    card_content: String,
    discord_url : String,
})


const Top50 = mongoose.model('Top50', top50Schema);
module.exports = Top50;