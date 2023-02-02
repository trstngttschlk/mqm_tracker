const express = require("express")
const app = express()
const PORT = 3000

const homeRoutes = require("./routes/home")

app.set("view-engine", "ejs")

app.use("/", homeRoutes)

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})