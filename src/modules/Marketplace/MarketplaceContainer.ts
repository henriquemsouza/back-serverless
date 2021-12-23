import { ContainerModule } from "inversify";
import CreateProductCase from "./CreateProduct/CreateProductCase";
import CreateProductRouter from "./CreateProduct/CreateProductRouter";
import DeleteProductCase from "./DeleteProduct/DeleteProductCase";
import DeleteProductRouter from "./DeleteProduct/DeleteProductRouter";
import ProductsCase from "./Products/ProductsCase";
import ProductsRouter from "./Products/ProductsRouter";

const MarketplaceContainer = new ContainerModule((bind) => {
  bind<ProductsCase>(ProductsCase).toSelf();
  bind<ProductsRouter>(ProductsRouter).toSelf();
  bind<CreateProductCase>(CreateProductCase).toSelf();
  bind<CreateProductRouter>(CreateProductRouter).toSelf();
  bind<DeleteProductCase>(DeleteProductCase).toSelf();
  bind<DeleteProductRouter>(DeleteProductRouter).toSelf();
});

export default MarketplaceContainer;
