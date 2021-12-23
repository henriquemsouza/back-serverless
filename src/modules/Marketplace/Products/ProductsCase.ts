import { OK } from "http-status";
import { injectable } from "inversify";
import { SelectQueryBuilder } from "typeorm";
import Product from "../../../infra/db/entities/Product";
import {
  createDBConnection,
  getTypeORMConnection,
} from "../../../infra/db/utils/ConnectionHelper";
import { UseCase, UseCaseParams } from "../../../shared/contracts";
import ExceptionHandler from "../../../shared/decorators/ExceptionHandler";
import HttpResponse from "../../../shared/responses/HttpResponse";
import {
  ProductsHeaders,
  ProductsResponse,
} from "./interfaces/ProductsInterface";

@injectable()
export default class ProductsCase implements UseCase {
  @ExceptionHandler()
  async execute({ headers }: UseCaseParams<ProductsHeaders>) {
    const { code, category: categoryId } = headers as ProductsHeaders;

    await createDBConnection();

    const ormRepository = getTypeORMConnection().getRepository(Product);
    const result = await ormRepository.find(
      this.buildSearchProperties(code, categoryId)
    );

    return HttpResponse.success<ProductsResponse>({
      body: { products: result },
      statusCode: OK,
    });
  }

  private buildSearchProperties(code: string, categoryId: string) {
    return {
      where: (qb: SelectQueryBuilder<Product>) => {
        qb.leftJoin("Product.category", "category");
        if (code) qb.where("Product.code = :code", { code });
        if (categoryId) qb.where("category_id = :categoryId", { categoryId });
      },
      relations: ["category"],
    };
  }
}
