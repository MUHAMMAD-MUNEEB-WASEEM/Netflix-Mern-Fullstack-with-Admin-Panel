const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js')
const checkAuth = require('../auth/checkAuth');

const User = require('../schema/User');


//Update
router.put('/:id', checkAuth,(req, res, next)=>{

    //First check whether user updating his info or admin updating some user info or someone else trying to update info of any other user which we dont want
    //this req.user is from checkAuth file, it is for verification whether person same or not
    if (req.user.id === req.params.id || req.user.admin){

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
    if (req.user.id === req.params.id || req.user.admin){

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


//get

//get all

//get user stats
 //Total users in any month

 module.exports = router;