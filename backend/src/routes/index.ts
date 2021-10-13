import * as express from 'express';
import { USERS_API_ROUTE } from '../config/apiRoutes';
const usersRouter = require('./routers/users');

const router = (app: express.Application) => {
  app.use(USERS_API_ROUTE, usersRouter);
  app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Hello World' });
  });
}

export { router };