const testRouter = require("./router/controller/testRouter")
const express = require('express');

const connectDB = require("./config/db")
const cors = require("cors")



connectDB()






const app = express()
app.use(cors())

app.use(express.json())

app.use("/api", testRouter)


app.get("/", (req, res) => {
    res.json("hiiii")
})







app.listen(4000, () => console.log("server is running"))