const jwt = require('jsonwebtoken');

require('dotenv').config();

const user = require('../models/userModel.js');

const isAdminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(401);
        await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, verifiedToken) => {
            if (err) return res.status(403).send(err);
            user.findOne({tokens: verifiedToken, role: 'admin'});
            next();
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

module.exports = isAdminAuth;
