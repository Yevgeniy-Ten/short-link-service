const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {PORT, mongoURI, pagesPath} = require("../configuration")
const shortRouter = require("./routes/shorter.route")
const authRouter = require("./routes/auth.route")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))
const start = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.use("/api/auth", authRouter)
        app.use("/api/shorter", shortRouter)
        app.use("*", (req, res) => {
            const pageNotFoundPath = `${pagesPath}/404.html`
            res.status(404).sendFile(pageNotFoundPath)
        })
        app.listen(PORT, () => console.log(`${PORT}=>server port`))
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}
start()