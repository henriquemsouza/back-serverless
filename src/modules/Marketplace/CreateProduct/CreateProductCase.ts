import { OK } from "http-status";
import Category from "../../../infra/db/entities/Category";
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
              "Error: The code entered has already been used in another product",
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

    const categoryRepository = getTypeORMConnection().getRepository(Category);
    const categories = await categoryRepository.findByIds([categoryId]);

    if (categories.length === 0) {
      throw new Error("No categories were found");
    }

    const informedCategory = categories[0];

    const result = await ormRepository.save({
      code,
      category: informedCategory,
      name,
    });

    return HttpResponse.success<CreateProductResponse>({
      body: result,
      statusCode: OK,
    });
  }
}
