const express = require("express");
const serverless = require("serverless-http");
const basicAuth = require("express-basic-auth");
const app = express();
const PORT = 8080;
const router = express.Router();

app.use(
  basicAuth({
    users: {
      Admin: "secret1234",
    },
    challenge: true,
  })
);

router.get("/", (req, res) => {
  // res.render("index");
  res.sendFile(__dirname + "/index.html");
});

router.get("/galleryupload", (req, res) => {
  //authorization
  // res.render("upload");

  res.sendFile(__dirname + "/upload.html");
});

// router.get("/galleryupload", (req, res) => {
//   // res.render("upload");
//   res.sendFile(__dirname + "/upload.html");
// });

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
