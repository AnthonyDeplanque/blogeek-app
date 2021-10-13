const express = require('express');
const { getAllUsers } = require('../../controllers/users');

const route = express.Router();

route.get("/", getAllUsers);

module.exports = route;