const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const AuthGroupRouter = require("./routes/AuthGroupRouters");
const authGgroupPermissionsRouter = require('./routes/AuthGgroupPermissionsRouter');

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Allow requests from http://localhost:5173
const corsOptions = {
  origin: [
    "http://localhost:5173",
    'https://vzv3mjdr-4000.euw.devtunnels.ms/'
  ]
};
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// Define your routes here (indexRouter, usersRouter, AuthGroupRouter)

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/authgroup", AuthGroupRouter);
app.use("/authgrouppermissions", authGgroupPermissionsRouter);

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
  res.json({ 'error' : err.message });
});

module.exports = app;
