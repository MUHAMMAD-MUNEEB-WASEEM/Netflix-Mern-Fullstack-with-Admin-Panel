const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    
    try {

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY, (err,userData)=>{
            if (err) {
                res.status(403).json("Token is not valid")
            };
            req.user = userData
             next(); //if successful go to router
    });
        
    }catch (error){
        return res.status(401).json({
            message: 'Auth failed'
        })
    }
    
}