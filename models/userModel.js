// Model deals with data (json file)
// Functions below strictly be used to get/create/update/delete data.
const users = require("../data/users");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

module.exports = { findAll };
