const mongoose= require('mongoose');

const PostSchema2= mongoose.Schema({
    Mois: String,
    Valeur: Number,
});

module.exports =mongoose.model('Post2',PostSchema2);
