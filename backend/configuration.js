const path = require("path")
const rootPath = __dirname;
const mongoURI = "mongodb://localhost/shorter"
const PORT = 3003
const secretKeyJwt = "VERYSECRET"
const pagesPath = path.resolve(__dirname, "src", "pages")


module.exports = {
    rootPath,
    PORT,
    mongoURI,
    pagesPath,
    secretKeyJwt
}