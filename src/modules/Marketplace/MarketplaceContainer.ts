import { ContainerModule } from "inversify";
import ProductsCase from "./Products/ProductsCase";
import ProductsRouter from "./Products/ProductsRouter";

const MarketplaceContainer = new ContainerModule((bind) => {
  bind<ProductsCase>(ProductsCase).toSelf();
  bind<ProductsRouter>(ProductsRouter).toSelf();
});

export default MarketplaceContainer;
