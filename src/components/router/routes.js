import Home         from '../pages/home/home';
import Warehouses   from './../pages/warehouses/warehouses';

export const routes = [
    {path: '/', element: <Home />},
    {path: '/warehouses', element: <Warehouses />},
    {path: '/statistic', element: <Warehouses />},
    {path: '/leftovers', element: <Warehouses />},
]