import { Router } from 'express';

const routes = Router();

routes.get('/', (request, reponse) => {
  return reponse.json({ message: 'Hello dev!' });
});

export default routes;
