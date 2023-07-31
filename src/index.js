const express = require("express")
const morgan = require("morgan")

const routes = require("./routes/routs.js")
const app = express()

app.use(morgan('dev'))
app.use(routes)

app.listen(3000)
console.log("On poart 3000")