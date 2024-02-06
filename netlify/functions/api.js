const express = require("express");
const app = express();
const PORT = 8080;
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
