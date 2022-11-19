import { 
  faPencil,
  faTrash,
  faWarehouse, 
}                            from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { Link }              from 'react-router-dom';
import { useDispatch }       from 'react-redux';
import React                 from 'react';

import { deleteWarehouse }   from '../../../api/requests/warehouses';
import { Paths }             from '../../../api/constants';

const WarehousesList = ({ warehouses }) => {
  const dispatch = useDispatch();

  const deleteChosenWarehouse = (id) => {
    dispatch(deleteWarehouse(id));
  }

  return (
    <div className='warehouses__list'>
        {warehouses.map(warehouse => (
          <Link to={`${Paths.warehouses}/${warehouse.id}`} key={warehouse.name}>
            <div className='warehouses__item'>
            {/* <div className='warehouses__item' style={warehouse.image && {backgroundImage: `url(${warehouse.image})`}}> */}
              <div className={'warehouses__item-overlay ' + (
                  warehouse.leftovers > warehouse.capacity ? 'a-lot-of' : ''
                )}
              >
                <div className='warehouses__item-actions'>
                  <FontAwesomeIcon icon={faPencil} />
                  <FontAwesomeIcon icon={faTrash} onClick={() => deleteChosenWarehouse(warehouse.id)}/>
                </div>
                <FontAwesomeIcon icon={faWarehouse} />
                <p>{warehouse.name}</p>
                <span className='warehouses__item-leftovers'>
                  {`${warehouse.leftovers} / ${warehouse.capacity}`}
                </span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default WarehousesList;