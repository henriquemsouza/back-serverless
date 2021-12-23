import { Router } from 'express';
import MarketplaceRoutes from './Marketplace/MarketplaceRoutes';


const Routes = Router();

Routes.use('/marketplace', MarketplaceRoutes);

export default Routes;
