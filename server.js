const express = require("express");
const app = express();
const http = require("http");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", function(req, res) {
 console.log(req.body);
 res.json({test: "success"});
});

app.get("/", function(req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 4000;
server.listen(PORT, ()=> {
    console.log(`the server is running successfully on port: ${PORT}`)
});