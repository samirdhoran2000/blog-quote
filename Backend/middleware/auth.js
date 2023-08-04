const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        console.log(token);
        if (!token) {
            res.status(400).json({
                msg: "unauthorize access token is missing or invalid or upsent"
            });
        } else {
            
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    res.status(400).json({
                        msg: "error while verifying token"
                    })
                    
                } else {
                    console.log('middleware called ', decoded);
                    next();
                }
            });
        }
    } catch (error) {
        console.log('error in login middleware ', error);
        throw error;
    }
}


module.exports = { loginAuth };