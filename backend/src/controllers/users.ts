import * as express from 'express';
import { ServerResponses } from '../config/serverResponses';
import { Users } from "../models/Users";

const Joi = require('joi');
const usersQueries = require('../SQLqueries/users');

const getAllUsers = (req: express.Request, res: express.Response) => {
  usersQueries.getUsersQuery()
    .then(([result]: Users[]) => res.status(200).json(result))
    .catch((error: any) => res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: error }))
}

module.exports = { getAllUsers }