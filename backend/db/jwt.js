require('dotenv').config();

const jwt=require('jsonwebtoken');

const jwtAuthMiddleware=(req,res,next)=>{
    const authorization=req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:'Token not found'});
    }

    const token=req.headers.autorization.split(' ')[1];
    if(!token){
        return res.status(401).json({error:'unauthorized'});
    }
    try{
        //verify token
        const decoded=jwt.verify(token,process.env.JWT_KEY);
        //Attach user
        req.user=decoded
        next();

    }
    catch(err){
 console.error(err);
 res.status(401).json({error:'Invalid token'});
    }
}
const generateToken=(userdata)=>{
return jwt.sign(userdata,process.env.JWT_KEY,{expiresIn:3000})
}
module.exports={jwtAuthMiddleware,generateToken};