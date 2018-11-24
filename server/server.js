const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

//CONNECTION TEST
app.get("/api/test", (req, res, next) => {
  res.json("Barely-Teaching-App basic server: Success");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});