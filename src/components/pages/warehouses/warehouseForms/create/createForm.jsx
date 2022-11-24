import { faCircleInfo }      from '@fortawesome/free-solid-svg-icons';
import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { addWarehouse }      from '../../../../../api/requests/warehouses';
import * as INTL             from './../../../../../utils/texts';
import FormFooter            from '../formFooter/formFooter';
import FormInput             from '../../../../shared/formInput/formInput';

import './createForm.scss';

const CreateForm = ({ setIsCreateModalOpen }) => {
    const dispatch = useDispatch();
    const [warehouseForm, setWarehouseForm] = useState({
        name: '',
        col: '',
        row: '',
        image: '',
        capacity: 0,
        leftovers: 0,
        address: '',
        racks: [],
    });

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    }

    const createWarehouse = () => {
        dispatch(addWarehouse(warehouseForm));
        closeCreateModal();
    }

    const createFormData = [
        {
            label: INTL.nameLabel, 
            placeholder: INTL.namePlaceholder, 
            changeFunction: (e) => setWarehouseForm({ ...warehouseForm, name: e.target.value }), 
            value: warehouseForm.name,
        },
        {
            label: INTL.columnsLabel, 
            placeholder: INTL.columnsPlaceholder, 
            changeFunction: (e) => setWarehouseForm({ ...warehouseForm, col: e.target.value }), 
            value: warehouseForm.col,
            icon: faCircleInfo,
        },
        {
            label: INTL.rowsLabel, 
            placeholder: INTL.rowsPlaceholder, 
            changeFunction: (e) => setWarehouseForm({ ...warehouseForm, row: e.target.value }), 
            value: warehouseForm.row,
            icon: faCircleInfo,
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
        <div className='createWarehouse__form'>
            {createFormData.map(input => (
                <FormInput 
                    key={input.label}
                    label={input.label} 
                    placeholder={input.placeholder} 
                    changeFunction={input.changeFunction}
                    value={input.value} 
                    icon={input.icon}
                />
            ))}
        </div>
        <FormFooter 
            firstFunction={closeCreateModal} 
            secondFunction={createWarehouse} 
            firstButtonText={INTL.cancel} 
            secondButtonText={INTL.createWarehouseAction}
        />
    </>
  )
}

export default CreateForm;