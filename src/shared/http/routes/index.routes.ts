import productsRouter from '@modules/products/routes/Products.routes';
import { Request, Response, Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
