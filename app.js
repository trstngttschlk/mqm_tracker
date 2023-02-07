const express = require("express")
const connectDB = require('./config/db')
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const PORT = 3000

dotenv.config({path: './config/.env'})

mongoose.set('strictQuery', false)
connectDB()

const homeRoutes = require("./routes/home")

app.set("view-engine", "ejs")
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}))


app.use("/", homeRoutes)

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})