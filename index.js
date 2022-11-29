const { request } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Homepage")
});

app.get("/publications", (req, res) => {
    res.sendFile(__dirname + "/html_CSSMarkup/html/index.html")
});

app.listen(8000, () => {
    console.log("Listen on the port 8000.....");
})