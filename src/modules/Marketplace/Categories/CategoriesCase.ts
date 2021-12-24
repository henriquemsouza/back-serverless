import { OK } from "http-status";
import Category from "../../../infra/db/entities/Category";
import { injectable } from "inversify";

import {
  createDBConnection,
  getTypeORMConnection,
} from "../../../infra/db/utils/ConnectionHelper";
import { UseCase } from "../../../shared/contracts";
import ExceptionHandler from "../../../shared/decorators/ExceptionHandler";
import HttpResponse from "../../../shared/responses/HttpResponse";
import { CategoriesResponse } from "./interfaces/CategoriesInterface";

@injectable()
export default class CategoriesCase implements UseCase {
  @ExceptionHandler()
  async execute() {
    await createDBConnection();

    const ormRepository = getTypeORMConnection().getRepository(Category);
    const result = await ormRepository.find();

    return HttpResponse.success<CategoriesResponse>({
      body: { categories: result },
      statusCode: OK,
    });
  }
}
