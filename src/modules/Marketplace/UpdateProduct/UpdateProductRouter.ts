import { inject, injectable } from "inversify";
import { IHttpRequest, RequestRouter } from "../../../shared/contracts";

import UpdateProductCase from "./UpdateProductCase";

@injectable()
export default class UpdateProductRouter implements RequestRouter {
  @inject(UpdateProductCase) private case: UpdateProductCase;

  async route(req: IHttpRequest<any, any, any, any>) {
    const result = await this.case.execute({
      body: req.body,
    });
    return result;
  }
}
