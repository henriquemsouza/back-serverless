import { ContainerModule } from "inversify";
import CreateProductCase from "./CreateProduct/CreateProductCase";
import CreateProductRouter from "./CreateProduct/CreateProductRouter";
import ProductsCase from "./Products/ProductsCase";
import ProductsRouter from "./Products/ProductsRouter";

const MarketplaceContainer = new ContainerModule((bind) => {
  bind<ProductsCase>(ProductsCase).toSelf();
  bind<ProductsRouter>(ProductsRouter).toSelf();
  bind<CreateProductCase>(CreateProductCase).toSelf();
  bind<CreateProductRouter>(CreateProductRouter).toSelf();
});

export default MarketplaceContainer;
