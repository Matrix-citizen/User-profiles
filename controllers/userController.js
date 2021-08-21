// Controller is going to control what the routes below are doing
// (which status, headers are sending)
// Also interacting with model, get the data from it.
const User = require("../models/userModel");

async function getUsers(req, res) {
  try {
    const users = await User.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getUsers };
