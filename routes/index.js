var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const location = "Database";
let output = new Date();
let filepath = `${output.getDate()}-${
  output.getMonth() + 1
}-${output.getFullYear()} ${output.getHours()}-${output.getMinutes()}-${output.getSeconds()} `;
console.log(filepath);
let myPath = path.join("Database", `${filepath}.txt`);

router.get("/createFile", async (req, res) => {
  fs.writeFile(`${myPath}`, `${new Date()}`, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  console.log(new Date());
  res.status(200).send(new Date());
});
router.get("/getAllFiles", (req, res) => {
  fs.readdir(location, (err, files) => {
    res.status(200).send(files);
    files.forEach((file) => {
      console.log(file);
    });
  });
});
module.exports = router;
