import { useDispatch }                             from 'react-redux';
import React, { useState, useEffect }              from 'react';

import { getUploadedWarehouse, updateWarehouse }   from './../../../../../api/requests/warehouses';
import * as INTL                                   from './../../../../../utils/texts';
import FormFooter                                  from './../formFooter/formFooter';
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
                    key={input.label}
                    label={input.label}
                    placeholder={input.placeholder}
                    changeFunction={input.changeFunction}
                    value={input.value}
                />
            ))}
        </div>
        <FormFooter
            firstFunction={closeUpdateModal}
            secondFunction={updateChosenWarehouse}
            firstButtonText={INTL.cancel}
            secondButtonText={INTL.updateWarehouseAction}
        />
    </>
  )
}

export default UpdateForm;