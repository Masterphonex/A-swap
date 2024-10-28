import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => { 
    const token = jwt.sign({userId}, process.env.JSON_TOKEN, {
        expiresIn: '10min'
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 10 * 60 * 1000
    })
 }

 export default generateToken