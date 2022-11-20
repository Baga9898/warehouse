import React from 'react';

import './deleteForm.scss';

const DeleteForm = ({ closeDeleteModal, deleteChosenWarehouse }) => {
  return (
    <>
        <div className='deleteModal__body'>
            <p>Are you sure you want to delete the warehouse?</p>
        </div>
        <div className='warehouseModal__footer'>
            <button onClick={closeDeleteModal}>Cancel</button>
            <button onClick={deleteChosenWarehouse}>Delete</button>
        </div>
    </>
  )
}

export default DeleteForm;