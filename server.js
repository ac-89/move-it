const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/galleryupload", (req, res) => {
  res.render("upload");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
