import { inject, injectable } from "inversify";
import { RequestRouter } from "../../../shared/contracts";
import CategoriesCase from "./CategoriesCase";

@injectable()
export default class CategoriesRouter implements RequestRouter {
  @inject(CategoriesCase) private case: CategoriesCase;

  async route() {
    const result = await this.case.execute();
    return result;
  }
}
