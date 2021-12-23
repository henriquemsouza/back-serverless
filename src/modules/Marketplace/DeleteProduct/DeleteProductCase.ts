import { OK } from "http-status";
import { injectable } from "inversify";
import Product from "../../../infra/db/entities/Product";
import {
  createDBConnection,
  getTypeORMConnection,
} from "../../../infra/db/utils/ConnectionHelper";
import { DeleteUseCase } from "../../../shared/contracts";
import ExceptionHandler from "../../../shared/decorators/ExceptionHandler";
import GenericException from "../../../shared/exceptions/GenericException";
import HttpResponse from "../../../shared/responses/HttpResponse";

@injectable()
export default class CreateProductCase implements DeleteUseCase {
  @ExceptionHandler()
  async execute(id: string) {
    try {
      await createDBConnection();

      const ormRepository = getTypeORMConnection().getRepository(Product);

      await ormRepository.delete(id);

      return HttpResponse.success<unknown>({
        body: "OK",
        statusCode: OK,
      });
    } catch (error) {
      return HttpResponse.error(
        new GenericException({
          name: "BadRequest",
          statusCode: 500,
          message: error,
        })
      );
    }
  }
}
