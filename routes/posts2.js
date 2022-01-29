const express = require('express');
const { collection } = require('../models/Post2');
const router=express.Router();
const Post2=require('../models/Post2');
const ObjectID= require('mongoose').Types.ObjectId
const mongodb=require('mongodb')

router.get('/',async (req,res)=>{
    try{
        const posts2= await Post2.find();
        res.send(posts2);
        console.log(posts2);
        console.log("Bien reçcu");
    }catch(err){
        res.json({message: err});
        console.log(err);
    }
});

router.post('/',async (req,res)=>{
    const post2={
        Mois: req.body.Mois,
        Valeur: req.body.Valeur
    }

    await collection.insertOne(post2).then(()=>{
        res.json(post2);
    })
   
});
//update
router.put("/:id", function(req, res){
    const post={
        Mois: req.body.Mois,
        Valeur: req.body.Valeur
    }
    Post.findByIdAndUpdate(req.params.id, 
     req.body.Valeur,async function(err,updatedBlog){
        if (err) {
            console.log("ERROR!");
        } else {
            await collection.updateOne({ _id: new ObjectID(req.params.id) },
            { $set: { Mois: req.body.Mois, Valeur: req.body.Valeur } },
            { upsert: true }).then(()=>{
                res.json(post);
            })
        }
    });
 });


module.exports=router;