import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

import './warehouses.scss';

const mockWarehouses = [
  { name: 'WH-1' },
  { name: 'WH-2' },
  { name: 'WH-3' },
  { name: 'WH-4' },
  { name: 'WH-5' },
  { name: 'WH-6' },
  { name: 'WH-7' },
  { name: 'WH-8' },
]

const Warehouses = () => {
  return (
    <section className='warehouses'>
      <h1>Warehouses</h1>
      <div className='warehouses__list'>
        {mockWarehouses.map(warehouse => (
          <div className='warehouses__item'>
            <FontAwesomeIcon icon={faWarehouse} />
            <p>{warehouse.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Warehouses;