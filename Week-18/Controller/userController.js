const UserModel = require('../Model/User');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const saltRounds = 10

exports.signupController = async(req,res) => {
    if(!req.body.email || !req.body.name || !req.body.password){
        return res.status(500).send({ error: 'Please fill the correct data' });
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const newUser =  new UserModel({
            email:email,
            password:hashedPassword,
            name:name
        })
        
    newUser
    .save()
    .then(data => {
        return res.status(200).send({response:data})
    })
    .catch(err => {
        return res.status(500).send({ error: err });
    })
}

function generateAccessToken(email) {
    return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: "2h" });
}

exports.loginController = async(req,res) => {
    if(!req.body.email || !req.body.password){
        return res.status(500).send({ error: 'Please fill the correct data' });
    }
    UserModel.findOne({email:req.body.email})
    .then((user) => {
        if(!user){
            return res.status(404).send({error:"User not found"})
        }else{
            bcrypt
            .compare(req.body.password, user.password)
            .then(data => {
                const generatedToken = generateAccessToken({email:req.body.email});
                return res.status(200).send({message:"Successfully Logged In", user:user, token:generatedToken});
            })
            .catch(err => {
                console.error(err.message)
                return res.status(401).send({message:"Unauthorized"});
            })                    
        }
    }).catch(err => {
        console.error(err);
        return res.status(500).send(err);
    })
}


