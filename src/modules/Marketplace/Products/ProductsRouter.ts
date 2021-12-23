import { inject, injectable } from "inversify";
import { IHttpRequest, RequestRouter } from "../../../shared/contracts";
import { ProductsHeaders } from "./interfaces/ProductsInterface";
import ProductsCase from "./ProductsCase";

@injectable()
export default class ProductsRouter implements RequestRouter {
  @inject(ProductsCase) private case: ProductsCase;

  async route(req: IHttpRequest<any, any, any, ProductsHeaders>) {
    const result = await this.case.execute({
      headers: req.headers,
    });
    return result;
  }
}
