import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ToDoController from './app/controllers/ToDoController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/users', UserController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.delete('/users', UserController.destroy);

routes.post('/todos', ToDoController.store);
routes.get('/todos', ToDoController.index);
routes.delete('/todos/:_id', ToDoController.destroy);

export default routes;
