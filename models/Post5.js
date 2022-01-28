const mongoose= require('mongoose');

const PostSchema5= mongoose.Schema({
    Mois: String,
    Valeur: Number,
});

module.exports =mongoose.model('Post5',PostSchema5);
