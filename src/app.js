import express from "express"
const app = express()
const PORT = 3000


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Labgeek"
    })
})
app.listen(PORT, () => {
    console.log("listening port 3000");
})