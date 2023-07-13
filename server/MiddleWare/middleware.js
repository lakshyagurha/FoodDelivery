const jwt = require('jsonwebtoken')


module.exports = async (req, res, next)=>{
    try{
        const token = req.headers['authorization'].split(' ')[1];
        console.log(token)

        jwt.verify(token, process.env.SECREATE_KEY, (err, decode)=>{
            if(err)
            {
                console.lgo(err)

            }
            else{
                console.log(decode.id)
                req.body.userid = decode.id;
                next();
            }
        })

    }
    catch{

    }
}