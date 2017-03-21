var express = require("express");
var path = require("path"); //help t work with file system path
var bodyParser = require("body-parser");

var index = require("./routes/index");
var tasks = require("./routes/tasks");

var port = 3000;

var app = express();

//View Engine
app.set("views", "D:/js/projects/mean_0_task_list/views"); //tell system wheres views folder
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Set stataic folder
app.use(express.static(path.join(__dirname,"client")));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", index);
app.use("/api", tasks);

app.listen(port, function() {
  console.log("Server started on port "+ port);
});
