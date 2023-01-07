import express from "express"
import path from "path"

const app = express()
const port = 3000

const __filename = "apikey.properties.encrypted"
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "files")))

const filePath = path.join(__dirname, 'files', __filename)

app.get("/", (req, res, next) => {
    res.download(filePath)
})

app.listen(port)