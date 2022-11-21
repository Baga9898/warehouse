import React, { useState }   from 'react';

import FormInput             from '../../../../shared/formInput/formInput';

const UpdateForm = ({ closeUpdateModal, updateChosenWarehouse }) => {
    const [warehouseForm, setWarehouseForm] = useState({
        name: '',
        adress: '',
    });

  return (
    <>
        <div className='updateWarehouse__form'>
            <FormInput 
                label='Name'
                placeholder='Warehouse name'
                changeFunction={(e) => setWarehouseForm({ ...warehouseForm, name: e.target.value })}
                value={warehouseForm.name}
            />
            <FormInput 
                label='Adress'
                placeholder='Warehouse adress'
                changeFunction={(e) => setWarehouseForm({ ...warehouseForm, adress: e.target.value })}
                value={warehouseForm.adress}
            />
        </div>
        <div className='warehouseModal__footer'>
            <button onClick={closeUpdateModal}>Cancel</button>
            <button onClick={updateChosenWarehouse}>Update</button>
        </div>
    </>
  )
}

export default UpdateForm;