const jwt = require('jsonwebtoken');

exports.checkUserAuthentication = async(req, res, next) => {
    const token =  req.headers.authorization
    if(!token){
        return res.status(403).send({'message':"No token Found"})
    }
    try{
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded
    }catch{
        return res.status(403).send({'message':"Unautorized Request"})
    }
    return next()
}

exports.checkFileUploaded = async(req, res, next) => {
    const file = req.file
    if(file){
        if(file.mimetype == 'application/pdf' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
            if(file.size > 2097152){
                return res.status(400).send({message:"File Size Limit Exceeded"})
            }else{
                return next();
            }
        }else{
            return res.status(400).send({message:"Invalid File Type"})
        }
    }
    next()
}