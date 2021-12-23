import { RoutesBuilder } from "../../utils/RoutesBuilder";
import CreateProductRouter from "./CreateProduct/CreateProductRouter";
import DeleteProductRouter from "./DeleteProduct/DeleteProductRouter";
import ProductsRouter from "./Products/ProductsRouter";

const MarketplaceRoutes = new RoutesBuilder()
  .get("/products/list", ProductsRouter)
  .post("/product", CreateProductRouter)
  .delete("/product", DeleteProductRouter)
  .build();

export default MarketplaceRoutes;
