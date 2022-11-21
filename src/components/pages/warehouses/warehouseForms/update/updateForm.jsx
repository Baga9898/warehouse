import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { updateWarehouse }   from './../../../../../api/requests/warehouses';
import FormInput             from '../../../../shared/formInput/formInput';

const UpdateForm = ({ closeUpdateModal, chosenWarehouseId }) => {
    const dispatch = useDispatch();
    const [warehouseForm, setWarehouseForm] = useState({
        name: '',
        adress: '',
    });

    const updateChosenWarehouse = () => {
        dispatch(updateWarehouse(chosenWarehouseId, warehouseForm));
        closeUpdateModal();
      }

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