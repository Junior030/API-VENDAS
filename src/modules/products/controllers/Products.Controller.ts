import { Request, Response } from 'express';
import CreateProductService from '../service/CreateProduct.Service';
import DeleteProductService from '../service/DeleteProduct.Service';
import ListByIdProductService from '../service/ListByIdProduct.Service';
import ListProductService from '../service/ListProduct.Service';
import UpdateProductService from '../service/UpdateProduct.Service';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductService();
    const products = await listProducts.execute();

    return response.json(products);
  }

  public async listById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const listByIdProduct = new ListByIdProductService();

    const product = await listByIdProduct.execute({ id });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute(data);

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const { id } = request.params;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({ id, ...data });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute({ id });

    return response.json([]);
  }
}
