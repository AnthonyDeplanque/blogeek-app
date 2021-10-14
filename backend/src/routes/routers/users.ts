const express = require('express');
const { getAllUsers, postUser } = require('../../controllers/users');

const route = express.Router();

route.get("/", getAllUsers);
route.post('/', postUser);

module.exports = route;