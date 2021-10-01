const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js')
const checkAuth = require('../auth/checkAuth');

const Movie = require('../schema/Movie');


//Create
router.post('/', checkAuth,(req, res, next)=>{

    //Only admin can create movie
    if (req.user.isAdmin){
        
        const newMovie = new Movie(req.body)

        newMovie
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



//Update
router.put('/:id', checkAuth,(req, res, next)=>{

    //Only admin can create movie
    if (req.user.isAdmin){
        
        Movie.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
            .exec()
            .then(result=>{
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                })
            })
        
    }else{
        res.status(403).json('You are not allowed')
    }
})

//Delete
router.delete('/:id', checkAuth,(req, res, next)=>{

    //Only admin can create movie
    if (req.user.isAdmin){
        
        Movie.findByIdAndDelete({_id:req.params.id})
            .exec()
            .then(()=>{
                res.status(200).json({
                    message: "Movie has been deleted"
                })
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                })
            })
        
    }else{
        res.status(403).json('You are not allowed')
    }
})


//Get all movies

//Delete
router.get('/', checkAuth,(req, res, next)=>{

    //Only admin can create movie
    if (req.user.isAdmin){
        
        Movie.find()
    
            .exec()
            .then(result=>{
                res.status(200).json(result.reverse())//reverse array to get latest movies
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                })
            })
        
    }else{
        res.status(403).json('You are not allowed')
    }
})



//get by id

router.get('/find/:id', checkAuth,(req, res, next)=>{

    Movie.findById(req.params.id)
        .exec()
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error:err
            })
        })
})


//Get random movie 
//get by id

router.get('/random', checkAuth,(req, res, next)=>{

    const type = req.query.type  // /random/?type=series 

    //if type is series
    if (type==="series"){

        //We need 1 random series
        Movie.aggregate([
            { $match: { isSeries: true } },
            { $sample: { size: 1 }}
        ])
        .exec()
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json({
                error: err
            })
        })

    } else{

        //otherwise we get random movie
        
        Movie.aggregate([
            { $match: { isSeries: false } },
            { $sample: { size: 1 }}
        ])
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
})



module.exports = router;