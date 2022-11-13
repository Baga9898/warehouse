import { 
  faPencil,
  faTrash,
  faWarehouse, 
}                            from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import React                 from 'react';

const WarehousesList = ({ warehouses }) => {
  return (
    <div className='warehouses__list'>
        {warehouses.map(warehouse => (
          <div key={warehouse.name} className='warehouses__item' style={{backgroundImage: `url(${warehouse.image})`}}>
            <div className={'warehouses__item-overlay ' + (warehouse.leftovers > warehouse.capacity
                ? 'a-lot-of' : '')
              }
            >
              <div className='warehouses__item-actions'>
                <FontAwesomeIcon icon={faPencil} />
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <FontAwesomeIcon icon={faWarehouse} />
              <p>{warehouse.name}</p>
              <span className='warehouses__item-leftovers'>
                {`${warehouse.leftovers} / ${warehouse.capacity}`}
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default WarehousesList;