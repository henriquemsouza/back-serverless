import { ContainerModule } from "inversify";
import CategoriesCase from "./Categories/CategoriesCase";
import CategoriesRouter from "./Categories/CategoriesRouter";
import CreateProductCase from "./CreateProduct/CreateProductCase";
import CreateProductRouter from "./CreateProduct/CreateProductRouter";
import DeleteProductCase from "./DeleteProduct/DeleteProductCase";
import DeleteProductRouter from "./DeleteProduct/DeleteProductRouter";
import ProductsCase from "./Products/ProductsCase";
import ProductsRouter from "./Products/ProductsRouter";
import UpdateProductCase from "./UpdateProduct/UpdateProductCase";
import UpdateProductRouter from "./UpdateProduct/UpdateProductRouter";

const MarketplaceContainer = new ContainerModule((bind) => {
  bind<ProductsCase>(ProductsCase).toSelf();
  bind<ProductsRouter>(ProductsRouter).toSelf();
  bind<CreateProductCase>(CreateProductCase).toSelf();
  bind<CreateProductRouter>(CreateProductRouter).toSelf();
  bind<DeleteProductCase>(DeleteProductCase).toSelf();
  bind<DeleteProductRouter>(DeleteProductRouter).toSelf();
  bind<UpdateProductCase>(UpdateProductCase).toSelf();
  bind<UpdateProductRouter>(UpdateProductRouter).toSelf();
  bind<CategoriesCase>(CategoriesCase).toSelf();
  bind<CategoriesRouter>(CategoriesRouter).toSelf();
});

export default MarketplaceContainer;
