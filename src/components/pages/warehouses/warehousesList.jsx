import { faWarehouse }       from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React                 from 'react';

const WarehousesList = ({ warehouses }) => {
  return (
    <div className='warehouses__list'>
        {warehouses.map(warehouse => (
          <div key={warehouse.name} className='warehouses__item'>
            <FontAwesomeIcon icon={faWarehouse} />
            <p>{warehouse.name}</p>
          </div>
        ))}
    </div>
  )
}

export default WarehousesList;