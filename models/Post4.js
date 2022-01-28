const mongoose= require('mongoose');

const PostSchema4= mongoose.Schema({
    Mois: String,
    Valeur: Number,
});

module.exports =mongoose.model('Post4',PostSchema4);
