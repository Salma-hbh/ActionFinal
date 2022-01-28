const express = require('express');
const { collection } = require('../models/Post');
const router=express.Router();
const Post=require('../models/Post');
const ObjectID= require('mongoose').Types.ObjectId
const mongodb=require('mongodb')

router.get('/',async (req,res)=>{
    try{
        const posts= await Post.find();
        res.send(posts);
        console.log(posts);
        console.log("Bien reçcu");
    }catch(err){
        res.json({message: err});
        console.log(err);
    }
});

router.post('/',async (req,res)=>{
    const post={
        Mois: req.body.Mois,
        Valeur: req.body.Valeur
    }

    await collection.insertOne(post).then(()=>{
        res.json(post);
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