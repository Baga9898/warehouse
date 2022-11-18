import { useDispatch, useSelector }    from 'react-redux';
import React, { useState, useEffect }  from 'react';

import { getWarehouses }               from './../../../api/requests/warehouses';
import ModalWindow                     from '../../shared/modalWindow/modalWindow';
import PageTamplate                    from '../../shared/pageTemplate/pageTamplate';
import WarehousesHeaderRightside       from './warehouseItem/warehousesHeaderRightside/warehousesHeaderRightside';
import WarehousesList                  from './warehousesList';

import './warehouses.scss';
import CreateForm from './warehouseForms/createForm';

const Warehouses = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const dispatch = useDispatch();
    const warehouses = useSelector(state => state.warehouse.warehouses);
  
    useEffect(() => {
        dispatch(getWarehouses());
    }, []);

    return (
        <>
            <PageTamplate
                pageName='Warehouses'
                extraClassName={'warehouses'}
                rightsideComponent={<WarehousesHeaderRightside setIsModalOpen={setIsCreateModalOpen}/>}
            >
                <WarehousesList warehouses={warehouses}/>
            </PageTamplate>
            <ModalWindow 
                open={isCreateModalOpen} 
                onClose={() => setIsCreateModalOpen(false)}
                actionName='Create warehouse'
            >
                <CreateForm setIsCreateModalOpen={setIsCreateModalOpen}/>
            </ModalWindow>
        </>
    )
}

export default Warehouses;