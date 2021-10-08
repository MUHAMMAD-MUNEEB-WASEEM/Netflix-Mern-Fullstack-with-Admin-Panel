const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const User = require('../schema/User');

//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//login
router.post('/login', (req, res)=>{
    User.findOne({email: req.body.email})
        .exec()
        .then(user => {
            if (!user){
                return res.status(401).json({
                    message: 'Auth Failed'
                })
            }

            //Decrypting password for comparision 
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            if(originalPassword !== req.body.password){
                return res.status(401).json({
                    message: 'Please Enter Correct Password'
                })
            }else{
                const accessToken = jwt.sign(
                    {id: user._id, isAdmin: user.isAdmin}, 
                    process.env.SECRET_KEY, {expiresIn: '1h'}
                    )
                //destructure to avoid getting password and __v in response
                const {password, __v, ...info} = user._doc;
                res.status(200).json({...info, accessToken})
            }
        })
        .catch(error=>{
            res.status(500).json(user)
        })

})

module.exports = router
