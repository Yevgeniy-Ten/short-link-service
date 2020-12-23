const jwt = require("jsonwebtoken")
const {secretKeyJwt} = require("../../configuration")
const checkLoginMiddleware = () => {
    return async (req, res, next) => {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization && req.headers.authorization.split(" ")[1]
            if (!token) {
                return res.status(403).json({msg: "Access denied"})
            }
            const user = await jwt.verify(token, secretKeyJwt)
            req.userId = user.id
            next()
        } catch (e) {
            return res.status(400).json({msg: "Server cannot answer on your request, check headers", e})
        }

    }
}
module.exports = checkLoginMiddleware