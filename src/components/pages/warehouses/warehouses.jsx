import { useDispatch, useSelector }   from 'react-redux';
import React, { useEffect, useMemo }           from 'react';

import { getWarehouses }              from './../../../api/requests/warehouses';
import WarehousesList                 from './warehousesList';

import './warehouses.scss';

const Warehouses = () => {
  const dispatch = useDispatch();
  const warehouses = useSelector(state => state.warehouse.warehouses);
  
  useMemo(() => {
    dispatch(getWarehouses());
  }, [])

  return (
    <section className='warehouses'>
      <h1>Warehouses</h1>
      <WarehousesList warehouses={warehouses}/>
    </section>
  )
}

export default Warehouses;