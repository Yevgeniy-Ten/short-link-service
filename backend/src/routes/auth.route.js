const {Router} = require("express")
const {secretKeyJwt} = require("../../configuration")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const loginMiddleware = require("../middlewares/login.middleware")
const router = Router()

router.post("/register", async (req, res) => {
    try {
        const {login, password} = req.body
        if (!login || login.length < 3 || !password || password.length < 3) {
            return res.status(400).json({msg: "Password, login length must be min:3"})
        }
        const userExist = await User.findOne({login})
        if (userExist) {
            return res.status(409).json({msg: "Login is existing"})
        }
        const hashPassword = await bcrypt.hash(password, 4)
        const user = new User({login, password: hashPassword})
        await user.save()
        return res.status(201).json({msg: "User created success"})
    } catch (e) {
        res.status(500).json({msg: "Server broken"})
    }
})
router.post("/login", async (req, res) => {
    try {
        const {login, password} = req.body
        if (!login || !password) {
            return res.status(400).json({msg: "Correct you request"})
        }
        const user = await User.findOne({login})
        if (!user) {
            return res.status(401).json({msg: "User login not found"})
        }
        const passIsTrue = await bcrypt.compare(password, user.password)
        if (!passIsTrue) {
            return res.status(403).json({msg: "User password doesn't match"})
        }
        const token = jwt.sign({id: user._id}, secretKeyJwt, {expiresIn: "30m"})
        return res.json({token})
    } catch (e) {
        res.status(500).json({msg: "Server broken"})
    }
})
router.get("/refresh", loginMiddleware(), async (req, res) => {
    try {
        const token = jwt.sign({id: req.userId}, secretKeyJwt, {expiresIn: "30m"})
        return res.json({token})
    } catch (e) {
        res.status(500).json({msg: "Server broken"})
    }
})


module.exports = router