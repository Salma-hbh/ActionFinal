const mongoose= require('mongoose');

const PostSchema= mongoose.Schema({
    Mois: String,
    Valeur: Number,
});

module.exports =mongoose.model('Post',PostSchema);
