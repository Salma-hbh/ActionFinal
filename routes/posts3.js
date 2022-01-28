const express = require('express');
const { collection } = require('../models/Post3');
const router=express.Router();
const Post3=require('../models/Post3');
const ObjectID= require('mongoose').Types.ObjectId
const mongodb=require('mongodb')

router.get('/',async (req,res)=>{
    try{
        const posts3= await Post3.find();
        res.send(posts3);
        console.log(posts3);
        console.log("Bien reçcu");
    }catch(err){
        res.json({message: err});
        console.log(err);
    }
});

router.post('/',async (req,res)=>{
    const post3={
        Mois: req.body.Mois,
        Valeur: req.body.Valeur
    }

    await collection.insertOne(post3).then(()=>{
        res.json(post3);
    })
   
});
//update
/*router.put("/:id", function(req, res){
    const post={
        Mois: req.body.Mois,
        Valeur: req.body.Valeur
    }
    Post.findByIdAndUpdate(req.params.id, 
     req.body.Valeur,async function(err,updatedBlog){
        if (err) {
            console.log("ERROR!");
        } else {
            await collection.updateOne(post).then(()=>{
                res.json(post);
            })
        }
    });
 });*/


module.exports=router;