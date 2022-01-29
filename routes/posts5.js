const express = require('express');
const { collection } = require('../models/Post5');
const router=express.Router();
const Post5=require('../models/Post5');
const ObjectID= require('mongoose').Types.ObjectId
const mongodb=require('mongodb')

router.get('/',async (req,res)=>{
    try{
        const posts5= await Post5.find();
        res.send(posts5);
        console.log(posts5);
        console.log("Bien reçcu");
    }catch(err){
        res.json({message: err});
        console.log(err);
    }
});

router.post('/',async (req,res)=>{
    const post5={
        Mois: req.body.Mois,
        Valeur: req.body.Valeur
    }

    await collection.insertOne(post5).then(()=>{
        res.json(post5);
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