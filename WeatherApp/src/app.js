const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const templatepath = path.join(__dirname, "../templates");
const partialspath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath);

app.use(express.static(path.join(__dirname, "../../public")));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("error");
});
app.listen(8000, (err) => {
  console.log("App working on 8000 💗💗");
});
