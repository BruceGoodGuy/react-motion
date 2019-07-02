var User = require('./../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

function login (req, res, next) {
    let {email, password} = req.body;
    User.getUserByEmail(email, (err, result) => {
        if(err) {
            res.status(500);
            res.json({status: 'Error', result: 'Intenal error'})
        };
        if(result != null){

            // base64 decode
            let buff = new Buffer(password, 'base64');  
            let password_en = buff.toString('ascii');

            // compare password (use bcrypt)
            bcrypt.compare(password_en, result.password, function (err, result) {
                if(result){
                    let secret = process.env.SECRET_KEY;
                    const payload = { email };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true })
                    .sendStatus(200);
                }else{
                    res.status(401).json({status: 'Error', result: 'Email or Password is valid'})
                }
            })
        }else{
            res.status(404);
            res.json({status: 'Error', result: 'Cannot find user'})
        }
    });
}

function getUser(req, res, next){
    res.send("1234")
}

module.exports = {
    login,
    getUser
}