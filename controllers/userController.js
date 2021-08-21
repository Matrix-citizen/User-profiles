// Controller is going to control what the routes are doing
// (which status, headers are sending)
// Also interacting with model, get the data from it.
const User = require("../models/userModel");

// Gets All Users
// It's route: GET /api/users
async function getUsers(req, res) {
  try {
    const users = await User.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
}

// Gets Single User
// It's route: GET /api/user/:id
async function getUser(req, res, id) {
  try {
    const user = await User.findById(id);

    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: 'User Not Found' }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    }

  } catch (error) {
    console.log(error);
  }
}

module.exports = { 
  getUsers,
  getUser 
};
