const express = require("express");
const path = require("path");

const app = express();

const blogRouter = require("./routes/blog.router");
const miniappRouter = require("./routes/miniApp.router")

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(blogRouter);
app.use("/mini-app", miniappRouter);
app.get("/test", function(req, res){
    res.render("test");
})

db.connectToDB().then( function(){
    app.listen(3300);
}).catch( function(error) {
    console.log("Failed to connect to the database!");
    console.log(error);
});