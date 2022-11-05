import Home         from '../pages/home/home';
import Warehouses   from './../pages/warehouses/warehouses';

export const routes = [
    {path: '/', element: <Home />},
    {path: '/warehouses', element: <Warehouses />},
    {path: '*', element: <div>404</div>},
]