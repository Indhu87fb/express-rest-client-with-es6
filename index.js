const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const studentsRouter = require("./routers/studentsRouter");
const studentRouter = require("./routers/studentRouter");

const app = express();

/**
 * Configuring express to use handlebars
 */
const hbs = expressHbs.create({
  extname: ".hbs"
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", __dirname + "/views");

/**
 * Middleware for reading json data from
 * request body
 */
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   // res.send("Response from Middleware");
//   req.customKey = "Value set in the middleware";
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/students", studentsRouter);

app.use("/student", studentRouter);

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
