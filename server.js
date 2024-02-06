const express = require("express");
const app = express();
const PORT = 8080;
const cloudinary = require("cloudinary");

// cloudinary.config({
//   cloud_name: "dcmlljv4l",
//   api_key: "388785151925177",
//   api_secret: "K0p7OZb5HjZ8NwZ9S6jJ0uqKuXs",
//   secure: true,
// });

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
