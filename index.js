var express = require('express');
var app = express();

app.listen(3000, console.log("server is running"));
app.get('/',(req, res) => {
res.send("hello world!");
})