import React       from 'react';

import * as INTL   from '../../../../../utils/texts';
import FormFooter  from './../formFooter/formFooter';

import './deleteForm.scss';

const DeleteForm = ({ closeDeleteModal, deleteChosenWarehouse }) => {
  return (
    <>
        <div className='deleteModal__body'>
            <p>{INTL.deleteWarehouseContent}</p>
        </div>
        <FormFooter 
          firstFunction={closeDeleteModal}
          secondFunction={deleteChosenWarehouse}
          firstButtonText={INTL.cancel}
          secondButtonText={INTL.deleteWarehouseAction}
        />
    </>
  )
}

export default DeleteForm;