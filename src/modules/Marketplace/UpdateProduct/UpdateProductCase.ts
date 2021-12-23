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
  UpdateProductBody,
  UpdateProductResponse,
} from "./interfaces/UpdateProductsInterface";

@injectable()
export default class UpdateProductCase implements UseCase {
  @ExceptionHandler()
  async execute({ body }: UseCaseParams<UpdateProductBody>) {
    const { id, categoryId, name } = body;

    try {
      await createDBConnection();

      return await this.updateProduct(categoryId, name, id);
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

  private async updateProduct(categoryId: string, name: string, id: string) {
    const ormRepository = getTypeORMConnection().getRepository(Product);

    const currentProduct = await ormRepository.find({
      where: {
        id,
      },
    });

    if (currentProduct.length === 0) {
      throw new Error("No products were found");
    }

    await ormRepository.update(currentProduct[0].id, {
      categoryId,
      name,
    });

    const updateProduct = await ormRepository.find({
      where: {
        id,
      },
    });

    return HttpResponse.success<UpdateProductResponse>({
      body: updateProduct[0],
      statusCode: OK,
    });
  }
}
