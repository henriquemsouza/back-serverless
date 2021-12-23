import { Container } from "inversify";
import MarketplaceContainer from "../../modules/Marketplace/MarketplaceContainer";

import { Newable } from "../../shared/types";
import { Database } from "../db/utils/Database";

const container = new Container({ defaultScope: "Singleton" });

container.load(MarketplaceContainer);

container.bind<Database>(Database).toSelf();

export default container;

export const GetFromContainer = <T>(obj: Newable<T>) => container.get<T>(obj);
