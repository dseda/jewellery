const fs = require("fs");
const jewelsDir = [];
//Get the names of the child folders in a directory
function getChildNames(parentName) {
  fs.readdir(parentName, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        jewelsDir.push(file.toString());
      });
    }
  });
  return jewelsDir;
}

module.exports = getChildNames("./imgs");