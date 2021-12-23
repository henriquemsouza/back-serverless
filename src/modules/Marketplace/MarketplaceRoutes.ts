import { RoutesBuilder } from "../../utils/RoutesBuilder";
import ProductsRouter from "./Products/ProductsRouter";


const MarketplaceRoutes = new RoutesBuilder()
  .get('/products/list', ProductsRouter)
  .build();

export default MarketplaceRoutes;
