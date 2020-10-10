const express = require('express');
const jwt = require('jsonwebtoken')



const authenticateJWT = (req, res, next) => {
    console.log('Auth '+req)
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                console.log('Not Authenticated')
                return res.sendStatus(403);
            }

            console.log('Authenticated')
            next();
        });
    } else {
        console.log('No Header')
        res.sendStatus(401);
    }
};



exports.auth = async (req, res, next) => {
  const token = req.header('x-auth-token')

  if (!token) res.status(401).json({ msg: 'No token, authorization denied' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(403).json({ msg: 'Token is not valid' })
  }
}

