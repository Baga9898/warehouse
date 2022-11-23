import { Paths }       from './../../api/constants';
import Home            from '../pages/home/home';
import WarehouseItem   from './../pages/warehouses/warehouseItem/warehouseItem';
import Warehouses      from './../pages/warehouses/warehouses';

export const routes = [
    {path: Paths.root, element: <Home />},
    {path: Paths.warehouses, element: <Warehouses />},
    {path: `${Paths.warehouses}/:id`, element: <WarehouseItem />},
    {path: '*', element: <div>404</div>},
]