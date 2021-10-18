import {
  AUTHENTICATION_ROUTE,
  PASSWORD_ROUTE,
  ROLE_FOR_USER_API_ROUTE,
  TOKEN_ROUTE
} from "../../config/apiRoutes";
import * as express from 'express';


const { getAllUsers, postUser, loginUser, getUserProfile, getOneUserById, updateUser, deleteUser, updateUserPassword } = require('../../controllers/users');
const { addRoleToUser, removeRoleToUser } = require('../../controllers/roles');
const route = express.Router();

route.get("/", getAllUsers);
route.post('/', postUser);
route.post(AUTHENTICATION_ROUTE, loginUser);
route.post(TOKEN_ROUTE, getUserProfile);
route.post(ROLE_FOR_USER_API_ROUTE, addRoleToUser);
route.get("/:id", getOneUserById);
route.put('/:id', updateUser);
route.put(`${PASSWORD_ROUTE}/:id`, updateUserPassword);
route.delete('/:id', deleteUser);
route.delete(`${ROLE_FOR_USER_API_ROUTE}/:id`, removeRoleToUser);

module.exports = route;