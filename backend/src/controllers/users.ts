import * as express from 'express';
import { ServerDetails, ServerResponses } from '../config/serverResponses';
import { Users } from "../models/Users";
import { generatedId } from '../services/idGenerator';

const argon2 = require("argon2");
const Joi = require('joi');
const usersQueries = require('../SQLqueries/users');
const usersMiddlewares = require('../middlewares/users');
const uniqid = require('uniqid');

const postUser = async (req: express.Request, res: express.Response) => {
  const { nick_name, first_name, last_name, email, password, avatar, biography } = req.body;
  if (!password)
  {
    res.status(500).json({
      message: ServerResponses.SERVER_ERROR,
      detail: ServerDetails.NO_PASSWORD
    });
  }
  const id = generatedId();
  const hashed_password = await argon2.hash(password);
  const inscription_time = Date.now();

  const { error } = Joi.object(usersMiddlewares.postUserValidationObject).validate({ id, nick_name, first_name, last_name, email, hashed_password, inscription_time, avatar, biography }, { abortEarly: false });
  if (error)
  {
    console.error(error);
    res.status(422).json({ validationError: error.details });
  } else
  {
    usersQueries.getOneUserQueryByEmail(email).then(([results]: any) => {
      if (results.length)
      {
        res.status(409).json({ message: ServerResponses.CONFLICT, detail: ServerDetails.EMAIL_ALREADY_USED })
      } else
      {
        usersQueries.getOneUserQueryByNickname(nick_name).then(([results]: any) => {
          if (results.length)
          {
            res.status(409).json({ message: ServerResponses.CONFLICT, detail: ServerDetails.NICKNAME_ALREADY_USED })
          } else
          {
            const newUser = { id, nick_name, first_name, last_name, email, hashed_password, inscription_time, avatar, biography }
            usersQueries.addUserQuery(newUser).then(([results]: any) => {
              res.status(201).json({ ...newUser, response: { message: ServerResponses.REQUEST_OK, detail: ServerDetails.CREATION_OK } })
            }).catch((err: any) => {
              console.error(err);
              res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_CREATION })
            });
          }
        }).catch((err: any) => {
          console.error(err);
          res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
        });
      }
    }).catch((err: any) => {
      console.error(err);
      res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
    });
  }

}

const getAllUsers = (req: express.Request, res: express.Response) => {
  usersQueries.getUsersQuery()
    .then(([result]: Users[]) => res.status(200).json(result))
    .catch((error: any) => res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: error }))
}

module.exports = { getAllUsers, postUser }