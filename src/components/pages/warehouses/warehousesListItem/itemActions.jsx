import { faPencil, faTrash }   from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import React                   from 'react';

const ItemActions = ({ warehouse, openDeleteModal, openUpdateModal }) => {
  return (
    <div className='warehouses__item-actions'>
        <FontAwesomeIcon icon={faPencil} onClick={() => openUpdateModal(warehouse.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => openDeleteModal(warehouse.id)}/>
    </div>
  )
}

export default ItemActions;