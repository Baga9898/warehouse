import { useDispatch }                             from 'react-redux';
import React, { useState, useEffect }              from 'react';

import { getUploadedWarehouse, updateWarehouse }   from './../../../../../api/requests/warehouses';
import * as INTL                                   from './../../../../../utils/texts';
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

    const updateFormData = [
        {
            label: INTL.nameLabel, 
            placeholder: INTL.namePlaceholder, 
            changeFunction: (e) => setWarehouseForm({ ...warehouseForm, name: e.target.value }), 
            value: warehouseForm.name,
        },
        {
            label: INTL.addressLabel, 
            placeholder: INTL.addressPlaceholder, 
            changeFunction: (e) => setWarehouseForm({ ...warehouseForm, address: e.target.value }), 
            value: warehouseForm.address,
        },
    ];

  return (
    <>
        <div className='updateWarehouse__form'>
            {updateFormData.map(input => (
                <FormInput 
                    label={input.label}
                    placeholder={input.placeholder}
                    changeFunction={input.changeFunction}
                    value={input.value}
                />
            ))}
        </div>
        <div className='warehouseModal__footer'>
            <button onClick={closeUpdateModal}>{INTL.cancel}</button>
            <button onClick={updateChosenWarehouse}>{INTL.updateWarehouseAction}</button>
        </div>
    </>
  )
}

export default UpdateForm;