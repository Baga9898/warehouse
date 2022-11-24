import React       from 'react';

import * as INTL   from '../../../../../utils/texts';

import './deleteForm.scss';

const DeleteForm = ({ closeDeleteModal, deleteChosenWarehouse }) => {
  return (
    <>
        <div className='deleteModal__body'>
            <p>{INTL.deleteWarehouseContent}</p>
        </div>
        <div className='warehouseModal__footer'>
            <button onClick={closeDeleteModal}>{INTL.cancel}</button>
            <button onClick={deleteChosenWarehouse}>{INTL.deleteWarehouseAction}</button>
        </div>
    </>
  )
}

export default DeleteForm;