import { useDispatch }                             from 'react-redux';
import React, { useState, useEffect }              from 'react';

import { getUploadedWarehouse, updateWarehouse }   from './../../../../../api/requests/warehouses';
import FormInput                                   from '../../../../shared/formInput/formInput';

import './updateForm.scss';

const UpdateForm = ({ closeUpdateModal, chosenWarehouseId }) => {
    const dispatch = useDispatch();
    const [warehouseForm, setWarehouseForm] = useState({
        name: '',
        address: '',
    });

    useEffect(() => {
        chosenWarehouseId && getUploadedWarehouse(chosenWarehouseId, setWarehouseForm);
    }, [chosenWarehouseId])

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
                label='address'
                placeholder='Warehouse address'
                changeFunction={(e) => setWarehouseForm({ ...warehouseForm, address: e.target.value })}
                value={warehouseForm.address}
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