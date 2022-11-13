const jwt = require("jsonwebtoken")
const User = require("../model/userSchema")
const authenticate = async (req, resp, next) => {
    try {
        const token = req.cookies.jwtoken    //jwtoken is is the token name
       
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        const loginUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        if (!loginUser) {
            throw new Error("user not found ")
        }
        req.token = token;
        req.loginUser = loginUser;
        req.userID = loginUser._id;
        next()

    } catch (error) {
        resp.status(401).send("unauthorized : No token provideda")
        console.log(error)

    }

}
module.exports = authenticate