import { RoutesBuilder } from "../../utils/RoutesBuilder";
import CreateProductRouter from "./CreateProduct/CreateProductRouter";
import ProductsRouter from "./Products/ProductsRouter";

const MarketplaceRoutes = new RoutesBuilder()
  .get("/products/list", ProductsRouter)
  .post("/product", CreateProductRouter)
  .build();

export default MarketplaceRoutes;
