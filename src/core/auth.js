var jwt = require('jsonwebtoken');

module.exports = {
    ensureToken(req, res, next){
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403);
        }
    
    },
    validate(req, res, next){
        jwt.verify(req.token, 'secretKey', (err) => {
            if (err) {
              res.status(409).json({
                status: 'error',
                message: err,
              });
            } else {
                next();
            }}
            );
        }
};