import { AUTHENTICATION_ROUTE, PASSWORD_ROUTE, TOKEN_ROUTE } from "../../config/apiRoutes";

const express = require('express');
const { getAllUsers, postUser, loginUser, getUserProfile, getOneUserById, updateUser, deleteUser, updateUserPassword } = require('../../controllers/users');

const route = express.Router();

route.get("/", getAllUsers);
route.post('/', postUser);
route.post(AUTHENTICATION_ROUTE, loginUser);
route.post(TOKEN_ROUTE, getUserProfile);
route.get("/:id", getOneUserById);
route.put('/:id', updateUser);
route.put(`${PASSWORD_ROUTE}/:id`, updateUserPassword);
route.delete('/:id', deleteUser);

module.exports = route;