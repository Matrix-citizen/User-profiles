// Model deals with data (json file)
// Functions below strictly be used to get/create/update/delete data.
const users = require("../data/users");
const { v4: uuidv4 } = require("uuid");

const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((element) => element.id === id);
    resolve(user);
  });
}

function create(user) {
  return new Promise((resolve, reject) => {
    const newUser = { id: uuidv4(), ...user };
    users.push(newUser);
    writeDataToFile("./data/users.json", users);
    resolve(newUser);
  });
}

function update(id, user) {
  return new Promise((resolve, reject) => {
      const index = users.findIndex((u) => u.id === id)
      users[index] = { id,  ...user }
    writeDataToFile("./data/users.json", users);
    resolve(users[index]);
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update
};
