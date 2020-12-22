const {validateURL} = require("../assets/assets")
const linkMiddleware = () => {
    return async (req, res, next) => {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const {url} = req.body
            if (!url) {
                return res.status(400).json({msg: "You don't send URL"})
            }
            const urlIsValid = validateURL(url)
            if (!urlIsValid) {
                return res.status(400).json({msg: "Url not valid"})
            }
            next()
        } catch (e) {
            res.status(500).json({msg: "Server error"})
        }
    }
}

module.exports = linkMiddleware