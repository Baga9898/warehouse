import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { deleteWarehouse }   from '../../../api/requests/warehouses';
import { openCloseModal }    from '../../../utils/helpers/warehouse.helpers';
import * as INTL             from '../../../utils/texts';
import DeleteForm            from './warehouseForms/delete/deleteForm';
import ModalWindow           from '../../shared/modalWindow/modalWindow';
import UpdateForm            from './warehouseForms/update/updateForm';
import WarehousesListItem    from './warehousesListItem/warehousesListItem';


const WarehousesList = ({ warehouses }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [chosenWarehouseId, setChosenWarehouseId] = useState(null);
  const dispatch = useDispatch();

  const openDeleteModal = (id) => {
    setChosenWarehouseId(id);
    openCloseModal(setIsDeleteModalOpen, true);
  }

  const openUpdateModal = (id) => {
    setChosenWarehouseId(id);
    openCloseModal(setIsUpdateModalOpen, true);
  }

  const deleteChosenWarehouse = () => {
    dispatch(deleteWarehouse(chosenWarehouseId));
    openCloseModal(setIsDeleteModalOpen, false);
  }

    return (
        <div className='warehouses__list'>
            {warehouses.map((warehouse, index) => (
                <WarehousesListItem warehouse={warehouse} key={`${warehouse}_${index}`} openDeleteModal={openDeleteModal} openUpdateModal={openUpdateModal} />
            ))}
            <ModalWindow 
                open={isDeleteModalOpen}
                onClose={() => openCloseModal(setIsDeleteModalOpen, false)}
                actionName={INTL.deleteWarehouse}
            >
                <DeleteForm closeDeleteModal={() => openCloseModal(setIsDeleteModalOpen, false)} deleteChosenWarehouse={deleteChosenWarehouse}/>
            </ModalWindow>
            <ModalWindow
                open={isUpdateModalOpen}
                onClose={() => openCloseModal(setIsUpdateModalOpen, false)}
                actionName={INTL.updateWarehouse}
            >
                <UpdateForm closeUpdateModal={() => openCloseModal(setIsUpdateModalOpen, false)} chosenWarehouseId={chosenWarehouseId} />
            </ModalWindow>
        </div>
    )
}

export default WarehousesList;
