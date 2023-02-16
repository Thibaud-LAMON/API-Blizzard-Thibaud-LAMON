const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try {

        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        const decodedtoken = jwt.verify(token, 'SR1wKQYqlTLVWZSlYkot3xTu0qdZuWDn');
        //console.log(decodedtoken);
        const userId = decodedtoken.userId;

        req.auth = {
            userId: userId
        }

        next();
    } catch (error) {
        res.status(401).json({ error })
    }
}