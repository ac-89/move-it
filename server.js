const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
// app.set("view engine", "ejs");
app.set("view engine", "html");

app.get("/", (req, res) => {
  // res.render("index");
  res.sendFile(__dirname + "/index.html");
});

app.get("/galleryupload", (req, res) => {
  // res.render("upload");
  res.sendFile(__dirname + "/upload.html");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
