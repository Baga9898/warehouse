import { Routes, Route }   from 'react-router-dom';
import React               from 'react';

import { routes }          from './routes';

const WHSRouter = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default WHSRouter;