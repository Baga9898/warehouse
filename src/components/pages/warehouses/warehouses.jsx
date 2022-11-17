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
            >
                qwer
            </ModalWindow>
        </>
    )
}

export default Warehouses;