var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
require("./database/config");
var passport = require("passport");
require("./auth/auth");
var userRouter = require("./routers/user");
var authRouter = require("./routers/auth");
var moduleRouter = require("./routers/module");
var eventRouter = require("./routers/event")
var noteRouter = require("./routers/note");
var taskRouter = require("./routers/task");
var securityResponseRouter = require("./routers/securityResponse");
var webQARouter = require("./routers/webQA");
const cors = require('cors');
const whiteList = ['http://localhost:3000/login']


var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({origin:[]}))



app.use(authRouter);
app.use( passport.authenticate("jwt", { session: false }));
app.use("/users", userRouter);
app.use("/security", securityResponseRouter);
app.use("/modules", moduleRouter);
app.use("/event", eventRouter);
app.use("/notes", noteRouter);
app.use("/tasks", taskRouter);
app.use("/webQA", webQARouter);
app.use(cors());


module.exports = app;