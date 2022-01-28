const mongoose= require('mongoose');

const PostSchema3= mongoose.Schema({
    Mois: String,
    Valeur: Number,
});

module.exports =mongoose.model('Post3',PostSchema3);
