import { OK } from "http-status";
import { injectable } from "inversify";
import Product from "../../../infra/db/entities/Product";
import {
  createDBConnection,
  getTypeORMConnection,
} from "../../../infra/db/utils/ConnectionHelper";
import { UseCase, UseCaseParams } from "../../../shared/contracts";
import ExceptionHandler from "../../../shared/decorators/ExceptionHandler";
import GenericException from "../../../shared/exceptions/GenericException";
import HttpResponse from "../../../shared/responses/HttpResponse";
import {
  CreateProductBody,
  CreateProductResponse,
} from "./interfaces/CreateProductsInterface";

@injectable()
export default class CreateProductCase implements UseCase {
  @ExceptionHandler()
  async execute({ body }: UseCaseParams<CreateProductBody>) {
    const { code, categoryId, name } = body as CreateProductBody;

    try {
      await createDBConnection();

      return await this.createProduct(code, categoryId, name);
    } catch (error) {
      if (
        `${error}`.includes("duplicate key value violates unique constraint")
      ) {
        return HttpResponse.error(
          new GenericException({
            name: "BadRequest",
            statusCode: 500,
            message:
              "The code entered has already been used in another product",
          })
        );
      }
      return HttpResponse.error(
        new GenericException({
          name: "BadRequest",
          statusCode: 500,
          message: error,
        })
      );
    }
  }

  private async createProduct(code: string, categoryId: string, name: string) {
    const ormRepository = getTypeORMConnection().getRepository(Product);

    const result = await ormRepository.save({
      code,
      categoryId,
      name,
    });

    return HttpResponse.success<CreateProductResponse>({
      body: result,
      statusCode: OK,
    });
  }
}
