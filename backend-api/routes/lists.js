const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js')
const checkAuth = require('../auth/checkAuth');

const List = require('../schema/List');


//Create
router.post('/', checkAuth,(req, res, next)=>{

    //Only admin can create movie
    if (req.user.isAdmin){
        
        const newList = new List(req.body)

        newList
            .save()
            .then(result=>{
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
        
    }else{
        res.status(403).json('You are not allowed')
    }
})

//Delete

//Create
router.delete('/:id', checkAuth,(req, res, next)=>{

    //Only admin can create movie
    if (req.user.isAdmin){
        
        List.findByIdAndDelete({_id:req.params.id})
            .exec()
            .then(() => {
                res.status(200).json({
                    message: "List has been deleted"
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }else{
        res.status(403).json('You are not allowed')
    }
})


//get list from home page

router.get('/', checkAuth, (req, res, next)=>{
    
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    //if type series or movies
    if (typeQuery){

        //if genre like action comedy in type series or movies
        if(genreQuery){
            List.aggregate([
                { $sample: { size: 10 } },
                { $match:{ type: typeQuery, genre: genreQuery } }
            ])
            .exec()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
        }else{

            //if no genre specified, then 10 random provided type list either of series or movies
            List.aggregate([
                { $sample: { size: 10 } },
                { $match:{ type: typeQuery} }
            ])
            .exec()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
        }

    }else{
        //homepage
        List.aggregate([
            { $sample: { size:10 } }
        ])
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    }
})

module.exports = router;