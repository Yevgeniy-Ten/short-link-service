const {Router} = require("express")
const {generateShortLink} = require("../assets/assets")
const linkMiddleware = require("../middlewares/link.middleware")
const Link = require("../models/Link")

const router = Router()

router.get("/", async (req, res) => {
    try {
        const links = await Link.find()
        res.send(links)
    } catch (e) {
        res.status(500).json({msg: "Server error"})
    }
})
router.post("/", linkMiddleware(), async (req, res) => {
    try {
        const {url} = req.body
        let short = generateShortLink()
        let existing = await Link.findOne({short})
        while (existing) {
            short = generateShortLink()
            existing = await Link.findOne({short})
        }
        const newLink = new Link({
            main: url, short
        })
        await newLink.save()
        res.status(201).json(newLink)
    } catch (e) {
        res.status(500).json({msg: "Server error"})
    }
})
router.get("/:short", async (req, res) => {
    try {
        const {short} = req.params
        const link = await Link.findOne({short})
        console.log(link)
        if (!link) {
            return res.status(404).json({msg: "Link not found"})
        }
        link.clicks++
        await link.save()
        res.status(301).redirect(link.main)
    } catch (e) {
        res.status(500).json({msg: "Server error"})
    }
})
module.exports = router