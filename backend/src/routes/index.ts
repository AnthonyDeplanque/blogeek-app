import * as express from 'express';

const router = (app: express.Application) => {
  app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'hello world' });
  });
}

export { router };