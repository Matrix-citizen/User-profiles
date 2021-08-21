// Model deals with data (json file)
// Functions below strictly be used to get/create/update/delete data.
const users = require("../data/users");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

function findById (id) {
  return new Promise((resolve, reject) => {
    const user = users.find((element) => element.id === id);
    resolve(user);
  })
}

module.exports = { 
  findAll,
  findById 
};
