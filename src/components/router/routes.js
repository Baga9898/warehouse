import Home            from '../pages/home/home';
import Warehouses      from './../pages/warehouses/warehouses';
import WarehouseItem   from './../pages/warehouses/warehouseItem/warehouseItem';

export const routes = [
    {path: '/', element: <Home />},
    {path: '/warehouses', element: <Warehouses />},
    {path: '/test', element: <WarehouseItem />},
    {path: '*', element: <div>404</div>},
]