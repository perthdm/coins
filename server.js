const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const CoinRouter = require("./routes/CoinRouter");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://perthdm:D123456d@ds155192.mlab.com:55192/coindb");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/coins", CoinRouter);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", { title: "The index page!" });
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });
 
app.listen(port, function() {
  console.log("server run at " + port);
});
