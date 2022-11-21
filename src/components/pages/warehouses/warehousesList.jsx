import { 
  faPencil,
  faTrash,
  faWarehouse, 
}                            from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }   from '@fortawesome/react-fontawesome';
import { Link }              from 'react-router-dom';
import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { deleteWarehouse }   from '../../../api/requests/warehouses';
import { Paths }             from '../../../api/constants';
import DeleteForm            from './warehouseForms/delete/deleteForm';
import ModalWindow           from '../../shared/modalWindow/modalWindow';
import UpdateForm            from './warehouseForms/update/updateForm';

const WarehousesList = ({ warehouses }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [chosenWarehouseId, setChosenWarehouseId] = useState(null);
  const dispatch = useDispatch();

  const openDeleteModal = (id) => {
    setChosenWarehouseId(id);
    openCloseModal(setIsDeleteModalOpen, true);
  }

  const openUpdateWarehouse = (id) => {
    setChosenWarehouseId(id);
    openCloseModal(setIsUpdateModalOpen, true);
  }

  const openCloseModal = (callback, isOpen) => {
    callback(isOpen);
  }

  const deleteChosenWarehouse = () => {
    dispatch(deleteWarehouse(chosenWarehouseId));
    openCloseModal(setIsDeleteModalOpen, false);
  }

  const updateChosenWarehouse = () => {
    console.log('yep');
  }

  return (
    <div className='warehouses__list'>
        {warehouses.map(warehouse => (
          <div className='warehouses__item-wrapper' key={warehouse.name}>
            <Link to={`${Paths.warehouses}/${warehouse.id}`}>
              <div className='warehouses__item'>
              {/* <div className='warehouses__item' style={warehouse.image && {backgroundImage: `url(${warehouse.image})`}}> */}
                <div className={'warehouses__item-overlay ' + (
                    warehouse.leftovers > warehouse.capacity ? 'a-lot-of' : ''
                  )}
                >
                  <FontAwesomeIcon icon={faWarehouse} />
                  <p>{warehouse.name}</p>
                  <span className='warehouses__item-leftovers'>
                    {`${warehouse.leftovers} / ${warehouse.capacity}`}
                  </span>
                </div>
              </div>
            </Link>
            <div className='warehouses__item-actions'>
              <FontAwesomeIcon icon={faPencil} onClick={() => openUpdateWarehouse(warehouse.id)}/>
              <FontAwesomeIcon icon={faTrash} onClick={() => openDeleteModal(warehouse.id)}/>
            </div>
          </div>
        ))}
        <ModalWindow 
          open={isDeleteModalOpen}
          onClose={() => openCloseModal(setIsDeleteModalOpen, false)}
          actionName='Delete warehouse'
        >
          <DeleteForm closeDeleteModal={() => openCloseModal(setIsDeleteModalOpen, false)} deleteChosenWarehouse={deleteChosenWarehouse}/>
        </ModalWindow>
        <ModalWindow
          open={isUpdateModalOpen}
          onClose={() => openCloseModal(setIsUpdateModalOpen, false)}
          actionName='Update warehouse'
        >
          <UpdateForm closeUpdateModal={() => openCloseModal(setIsUpdateModalOpen, false)} updateChosenWarehouse={updateChosenWarehouse} />
        </ModalWindow>
    </div>
  )
}

export default WarehousesList;