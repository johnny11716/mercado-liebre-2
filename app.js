
const express = require("express");
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

const PORT = process.env.PORT || 3000



app.listen(PORT, () => console.log('Server on ${PORT}'));


app.use(express.static(publicPath));
app.use(express.urlencoded({extended: false}))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});
app.get("/cart", (req, res) => {
    res.sendFile(__dirname + "/views/cart.html");
});
app.get("*", (req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});
app.post("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
