import express from "express";
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/commend.route.js"

const app = express()

// app.get("/test", (req, res) => {
//     res.status(200).send("It works")
// })

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/commends", commentRouter);


app.listen(3000, () => {
    console.log("Server is running!")
})