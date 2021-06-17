const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

const staticpath = path.join(__dirname, "../Chutiya");

app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.send("App Working !!");
});
app.listen(port, () => {
  console.log("App working on port 8000 💗");
});
