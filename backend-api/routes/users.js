const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js')
const checkAuth = require('../auth/checkAuth');

const User = require('../schema/User');


//Update
router.put('/:id', checkAuth,(req, res, next)=>{

    //First check whether user updating his info or admin updating some user info or someone else trying to update info of any other user which we dont want
    //this req.user is from checkAuth file, it is for verification whether person same or not
    if (req.user.id === req.params.id || req.user.isAdmin){

        //First checking if user want to update password
        if(req.body.password){
            req.body.password =CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }

        //update whatever info user wants to update
        User.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
            .exec()
            .then(result => {

                //destructuring result object by separating password and __v and passing only info
                const {password, __v, ...info} = result._doc;
                res.status(200).json(info)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }else{
        res.status(403).json('You can update only your account')
    }
})


//delete

router.delete('/:id', checkAuth,(req, res, next)=>{

    //First check whether user deleting himselt or admin deleting some user  or someone else trying to delete any other user which we dont want
    //this req.user is from checkAuth file, it is for verification whether person same or not
    if (req.user.id === req.params.id || req.user.isAdmin){

        User.findByIdAndDelete({_id:req.params.id})
            .exec()
            .then(result => {

                res.status(200).json({
                    mesage: 'User has been deleted'
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }else{
        res.status(403).json('You can update only your account')
    }
})


//get by id
router.get('/find/:id',(req, res, next)=>{
    User.findById(req.params.id)
        .select("-password -__v")
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})



//get all

router.get('/', checkAuth,(req, res, next)=>{

    //if url is like /?new=true, then we need only latest 10 users otherwise all users

    const query = req.query.new

    //See all users if we are
    if (req.user.isAdmin){

        query ? User.find()
                    .sort({_id: -1}) //sort latest
                    .limit(2)
                    .exec()
                    .then(docs=>{
                        res.status(200).json(docs)
                    })
                    .catch(err => {
                        res.status(500).json(err)
                    })
        :
        User.find()
            .exec()
            .then(docs => {

                const response = docs.map(doc=>(
                    user = doc
                ))
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }else{
        res.status(403).json('You are not an admin')
    }
})



//get user stats
 //Total users in any month

 module.exports = router;