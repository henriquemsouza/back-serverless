import { RoutesBuilder } from "../../utils/RoutesBuilder";
import CategoriesRouter from "./Categories/CategoriesRouter";
import CreateProductRouter from "./CreateProduct/CreateProductRouter";
import DeleteProductRouter from "./DeleteProduct/DeleteProductRouter";
import ProductsRouter from "./Products/ProductsRouter";
import UpdateProductRouter from "./UpdateProduct/UpdateProductRouter";

const MarketplaceRoutes = new RoutesBuilder()
  .get("/products/list", ProductsRouter)
  .get("/categories/list", CategoriesRouter)
  .post("/product", CreateProductRouter)
  .delete("/product", DeleteProductRouter)
  .patch("/product", UpdateProductRouter)
  .build();

export default MarketplaceRoutes;
