import { inject, injectable } from "inversify";
import { RequestRouter } from "../../../shared/contracts";
import ProductsCase from "./ProductsCase";

@injectable()
export default class ProductsRouter implements RequestRouter {
  @inject(ProductsCase) private case: ProductsCase;

  async route() {
    const result = await this.case.execute();
    return result;
  }
}
