import { inject, injectable } from "inversify";
import { IHttpRequest, RequestRouter } from "../../../shared/contracts";
import DeleteProductCase from "./DeleteProductCase";
import { DeleteProductQuery } from "./interfaces/CreateProductsInterface";

@injectable()
export default class DeleteProductRouter implements RequestRouter {
  @inject(DeleteProductCase) private case: DeleteProductCase;

  async route(req: IHttpRequest<any, DeleteProductQuery, any, any>) {
    const id = req.query?.id;

    const result = await this.case.execute(id);
    return result;
  }
}
