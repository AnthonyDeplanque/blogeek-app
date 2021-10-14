import { AUTHENTICATION_ROUTE, TOKEN_ROUTE } from "../../config/apiRoutes";

const express = require('express');
const { getAllUsers, postUser, loginUser, getUserProfile } = require('../../controllers/users');

const route = express.Router();

route.get("/", getAllUsers);
route.post('/', postUser);
route.post(AUTHENTICATION_ROUTE, loginUser);
route.post(TOKEN_ROUTE, getUserProfile);

module.exports = route;