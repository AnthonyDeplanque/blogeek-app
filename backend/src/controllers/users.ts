import * as express from 'express';
import { ServerDetails, ServerResponses } from '../config/serverResponses';
import { Users } from "../models/Users";
import { generatedId } from '../services/idGenerator';

const argon2 = require("argon2");
const Joi = require('joi');
const usersQueries = require('../SQLqueries/users');
const usersMiddlewares = require('../middlewares/users');
const JWTServices = require('../services/jwt');


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

const loginUser = (req: express.Request, res: express.Response) => {
  const { nick_name, password } = req.body;
  const { error } = Joi.object(usersMiddlewares.loginUserValidationObject).validate({ nick_name, password }, { abortEarly: false });
  if (error)
  {
    console.error(error);
    res.status(422).json({ validationError: error.details });
  } else
  {
    usersQueries.getHashedPasswordByNickname(nick_name)
      .then(async ([[results]]: any) => {
        argon2.verify(results.hashed_password, password).then((match: boolean) => {
          if (match)
          {
            usersQueries.getOneUserQueryByNickname(nick_name).then(([[results]]: any) => {
              const token = JWTServices.createToken(results.email);
              res.status(200).json({
                ...results,
                token: token,
                message: ServerResponses.REQUEST_OK
              });
            });
          } else
          {
            res.status(401).json({ message: ServerResponses.ACCESS_DENIED });
          }
        }).catch((error: any) => {
          console.error(error);
          res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING });
        });
      }).catch((error: any) => {
        console.error(error);
        res.status(204).json({ message: ServerResponses.ACCESS_DENIED, detail: ServerDetails.CHECK_CREDENTIALS });
      });
  }
}

const getUserProfile = (req: express.Request, res: express.Response) => {
  const { token } = req.body;
  const timeStamp = Math.floor(Date.now() / 1000);
  try
  {
    const decodedToken = JWTServices.decodeToken(token);
    const { data, exp } = decodedToken;
    if (timeStamp < exp)
    {
      usersQueries.getOneUserQueryByEmail(data)
        .then(([[results]]: any) => {
          res.status(200).json({ ...results, expirationTimestamp: exp * 1000, message: ServerResponses.REQUEST_OK });
        })
        .catch((error: any) => {
          console.error(error);
          res.status(204).json({ message: ServerResponses.NOT_FOUND, detail: ServerDetails.ERROR_RETRIEVING });
        });
    } else
    {
      res.status(200).json({ message: ServerResponses.ACCESS_DENIED, detail: ServerDetails.RECONNECTION_NEEDED });
    }
  } catch (error)
  {
    console.error(error);
    res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.INVALID_TOKEN });
  }
}





const getAllUsers = (req: express.Request, res: express.Response) => {
  usersQueries.getUsersQuery()
    .then(([result]: Users[]) => res.status(200).json(result))
    .catch((error: any) => res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: error }))
}

module.exports = { getAllUsers, postUser, loginUser, getUserProfile }