import { AUTHENTICATION_ROUTE } from "../../config/apiRoutes";

const express = require('express');
const { getAllUsers, postUser, loginUser } = require('../../controllers/users');

const route = express.Router();

route.get("/", getAllUsers);
route.post('/', postUser);
route.post(AUTHENTICATION_ROUTE, loginUser);

module.exports = route;