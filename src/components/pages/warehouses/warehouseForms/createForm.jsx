import { faCircleInfo }      from '@fortawesome/free-solid-svg-icons';
import { useDispatch }       from 'react-redux';
import React, { useState }   from 'react';

import { addWarehouse }      from './../../../../api/requests/warehouses';
import FormInput             from '../../../shared/formInput/formInput';

const CreateForm = () => {
    const dispatch = useDispatch();
    const [warehouseForm, setWarehouseForm] = useState({
        name: '',
        col: '',
        row: '',
        image: '',
        capacity: 0,
        leftovers: 0,
        adress: '',
        racks: [],
    });

    const createWarehouse = () => {
        dispatch(addWarehouse(warehouseForm));
    }

  return (
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
            label='Adress' 
            placeholder='Adress' 
            changeFunction={(e) => setWarehouseForm({ ...warehouseForm, adress: e.target.value })} 
            value={warehouseForm.adress}
        />
        <div className='createWarehouse__footer'>
            <button onClick={() => setIsCreateModalOpen(false)}>Cancel</button>
            <button onClick={createWarehouse}>Create</button>
        </div>
    </div>
  )
}

export default CreateForm;