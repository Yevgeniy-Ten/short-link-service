const path = require("path")
const rootPath = __dirname;
const frontendURL = "http://localhost:3000"
const mongoURI = "mongodb://localhost/shorter"
const PORT = 3003
const pagesPath = path.resolve(__dirname, "src", "pages")


module.exports = {
    rootPath,
    PORT,
    frontendURL,
    mongoURI,
    pagesPath,
}