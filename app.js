var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
let getQueueLength = function () {
  return Math.round(12 * Math.random());
};
setInterval(() => {
  let queueLength = getQueueLength();

  console.log(`The queue at the McDonald's drive-through is now ${queueLength} cars long.`);

  if (queueLength === 0) {
    console.log("Quick, grab your coat!");
  }

  if (queueLength > 8) {
    return console.log("This is beginning to look impossible!");
  }
}, 3000);
module.exports = app;
