import React                 from 'react';

import WarehousesList from './warehousesList';

import './warehouses.scss';

const mockWarehouses = [
  { id: '1',name: 'WH-1' },
  { id: '2',name: 'WH-2' },
  { id: '3',name: 'WH-3' },
  { id: '4',name: 'WH-4' },
  { id: '5',name: 'WH-5' },
  { id: '6',name: 'WH-6' },
  { id: '7',name: 'WH-7' },
  { id: '8',name: 'WH-8' },
]

const Warehouses = () => {
  return (
    <section className='warehouses'>
      <h1>Warehouses</h1>
      <WarehousesList warehouses={mockWarehouses} />
    </section>
  )
}

export default Warehouses;