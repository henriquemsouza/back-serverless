import { inject, injectable } from "inversify";
import { IHttpRequest, RequestRouter } from "../../../shared/contracts";
import CreateProductCase from "./CreateProductCase";
import { CreateProductBody } from "./interfaces/CreateProductsInterface";

@injectable()
export default class CreateProductRouter implements RequestRouter {
  @inject(CreateProductCase) private case: CreateProductCase;

  async route(req: IHttpRequest<CreateProductBody, any, any, any>) {
    const result = await this.case.execute({
      body: req.body,
    });
    return result;
  }
}
