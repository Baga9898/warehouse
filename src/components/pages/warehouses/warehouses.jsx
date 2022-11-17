import { faCircleInfo }                from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }             from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector }    from 'react-redux';
import React, { useState, useEffect }  from 'react';

import { getWarehouses }               from './../../../api/requests/warehouses';
import ModalWindow                     from '../../shared/modalWindow/modalWindow';
import PageTamplate                    from '../../shared/pageTemplate/pageTamplate';
import WarehousesHeaderRightside       from './warehouseItem/warehousesHeaderRightside/warehousesHeaderRightside';
import WarehousesList                  from './warehousesList';

import './warehouses.scss';

const Warehouses = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [warehouseForm, setWarehouseForm] = useState({
        name: '',
        col: 0,
        row: 0,
        image: '',
        capacity: 0,
        leftovers: 0,
        adress: '',
        racks: [],
    });

    const dispatch = useDispatch();
    const warehouses = useSelector(state => state.warehouse.warehouses);
  
    useEffect(() => {
        dispatch(getWarehouses());
    }, [])

    return (
        <>
            <PageTamplate
                pageName='Warehouses'
                extraClassName={'warehouses'}
                rightsideComponent={<WarehousesHeaderRightside setIsModalOpen={setIsModalOpen}/>}
            >
                <WarehousesList warehouses={warehouses}/>
            </PageTamplate>
            <ModalWindow 
                open={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                actionName='Create warehouse'
                footerContent={
                    <div className='createWarehouse__footer'>
                        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                        <button>Create</button>
                    </div>
                }
            >
                <form className='createWarehouse__form'>
                    <label>Name</label>
                    <input placeholder='...'></input>
                    <label>Columns</label>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <input placeholder='...'></input>
                    <label>Rows</label>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <input placeholder='...'></input>
                    <label>Adress</label>
                    <input placeholder='...'></input>
                </form>
            </ModalWindow>
        </>
    )
}

export default Warehouses;