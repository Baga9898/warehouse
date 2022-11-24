import { faCircleInfo }      from '@fortawesome/free-solid-svg-icons';
import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { addWarehouse }      from '../../../../../api/requests/warehouses';
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

  return (
    <>
        <div className='createWarehouse__form'>
            <FormInput 
                label='Name' 
                placeholder='Warehouse name' 
                changeFunction={(e) => setWarehouseForm({ ...warehouseForm, name: e.target.value })}
                value={warehouseForm.name} 
            />
            <FormInput 
                label='Columns' 
                placeholder='Number of columns' 
                changeFunction={(e) => setWarehouseForm({ ...warehouseForm, col: e.target.value })} 
                value={warehouseForm.col}
                icon={faCircleInfo}
            />
            <FormInput 
                label='Rows' 
                placeholder='Number of rows'  
                changeFunction={(e) => setWarehouseForm({ ...warehouseForm, row: e.target.value })}  
                value={warehouseForm.row}
                icon={faCircleInfo} 
            />
            <FormInput 
                label='address' 
                placeholder='address' 
                changeFunction={(e) => setWarehouseForm({ ...warehouseForm, address: e.target.value })} 
                value={warehouseForm.address}
            />
        </div>
        <div className='warehouseModal__footer'>
            <button onClick={closeCreateModal}>Cancel</button>
            <button onClick={createWarehouse}>Create</button>
        </div>
    </>
  )
}

export default CreateForm;