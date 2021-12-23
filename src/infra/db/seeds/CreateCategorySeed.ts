import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import Category from "../entities/Category";
import Product from "../entities/Product";

export default class CreateCategorySeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values([
        { id: 10, name: "atacado" },
        { id: 11, name: "varejo" },
        { id: 12, name: "internacional" },
        { id: 13, name: "todos" },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([{ id: 20, code: "XY20", categoryId: "11", name: "Smartphone" }])
      .execute();
  }
}
