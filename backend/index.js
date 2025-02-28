import express from "express";

const app = express()

app.get("/test", (req, res) => {
    res.status(200).send("It works")
})



app.listen(3000, () => {
    console.log("Server is running!")
})