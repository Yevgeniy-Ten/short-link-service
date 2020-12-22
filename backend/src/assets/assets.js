const {nanoid} = require("nanoid")

const generateShortLink = () => {
    const nanoidSize = 10
    return nanoid(nanoidSize)
}
const validateURL = (url) => {
    let urlIsValid = false
    const domains = ["com", "ru", "kz", "org"]
    let urlDomain = url.split(".")[1]
    if (urlDomain) {
        urlIsValid = domains.find(domain => domain === urlDomain)
    }
    return urlIsValid
}
module.exports = {generateShortLink, validateURL}