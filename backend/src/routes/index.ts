import * as express from 'express';
import { CATEGORIES_API_ROUTE, SUBCATEGORIES_API_ROUTE, USERS_API_ROUTE } from '../config/apiRoutes';
const usersRouter = require('./routers/users');
const categoriesRouter = require('./routers/categories');
const subcategoriesRouter = require('./routers/subCategories');

const router = (app: express.Application) => {
  app.use(USERS_API_ROUTE, usersRouter);
  app.use(CATEGORIES_API_ROUTE, categoriesRouter);
  app.use(SUBCATEGORIES_API_ROUTE, subcategoriesRouter);

  app.get('/', (_req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Hello World' });
  });
}

export { router };