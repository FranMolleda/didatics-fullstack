const express = require("express")
const dBConnect = require("./config/db")
const app = express()

dBConnect()

app.use(express.json({
    extended: true
}));

app.use("/news", require("./routes/news"))
app.use("/", (req, res) => {
    res.send("Hola desde back")
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running in Port ${port}`);
});