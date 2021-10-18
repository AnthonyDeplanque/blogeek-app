import * as express from 'express';
import * as Joi from 'joi';
import { ServerDetails, ServerResponses } from '../config/serverResponses';
import { ROLE, Roles } from '../models/Role';
import { Users } from '../models/Users';
import { generatedId } from '../services/idGenerator';

const usersQueries = require('../SQLqueries/users');
const rolesToUsersQueries = require('../SQLqueries/rolesToUsers');
const rolesQueries = require('../SQLqueries/roles');
const rolesToUsersMiddleware = require('../middlewares/rolesToUser');

const addRoleToUser = (req: express.Request, res: express.Response) => {
  const { nick_name, role } = req.body;
  const { error } = Joi.object(rolesToUsersMiddleware.addRoleToUserValidationObject).validate(req.body, { abortEarly: false });
  if (error)
  {
    res.status(422).json({ validationError: error.details })
  }
  else
  {
    usersQueries.getOneUserQueryByNickname(nick_name).then(([[resultUser]]: [[Users]]) => {
      rolesQueries.getOneRoleQueryByName(role).then(([[resultRole]]: [[Roles]]) => {
        rolesToUsersQueries.addRoleToUserQuery({ id: generatedId(), id_user: resultUser.id, id_role: resultRole.id }).then(([[result]]: any) => {
          res.status(201).json({ user: resultUser, role: resultRole, result: result, response: { message: ServerResponses.REQUEST_OK, detail: ServerDetails.CREATION_OK } })
        }).catch((error: unknown) => {
          console.error(error);
          res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_CREATION })
        })

      }).catch((err: unknown) => {
        console.error(err);
        res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
      })

    }).catch((err: unknown) => {
      console.error(err);
      res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_RETRIEVING })
    })

  }
}

const removeRoleToUser = async (req: express.Request, res: express.Response) => {

  const { id } = req.params;
  const { role } = req.body;
  if (role !== ROLE.ROLE_USER)
  {
    const roleId = rolesQueries.getOneRoleQueryByName(role).then(([[result]]: [[Roles]]) => { return result })
    const promiseRoleId = Promise.resolve(roleId).then((value: any) => (value.id));
    rolesToUsersQueries.removeRoleToUserWithIdsQuery(await promiseRoleId, id).then(([result]: any) => {
      if (result.affectedRows)
      {
        res.status(200).json({ message: ServerResponses.REQUEST_OK, detail: ServerDetails.DELETE_OK, user: result.affectedRows });
      }
      else
      {
        res.status(404).json({ message: ServerResponses.NOT_FOUND, detail: ServerDetails.NO_DATA });
      }
    }).catch((error: unknown) => {
      console.error(error);
      res.status(500).json({ message: ServerResponses.SERVER_ERROR, detail: ServerDetails.ERROR_DELETE })
    })
  } else
  {
    res.status(403).json({ message: ServerResponses.ACCESS_DENIED, detail: ServerDetails.FORBIDDEN });
  }

}
module.exports = { addRoleToUser, removeRoleToUser }