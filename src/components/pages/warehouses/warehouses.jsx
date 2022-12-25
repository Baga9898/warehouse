import { useDispatch, useSelector }    from 'react-redux';
import React, { useState, useEffect }  from 'react';

import { getWarehouses }               from './../../../api/requests/warehouses';
import { openCloseModal }              from '../../../utils/helpers/warehouse.helpers';
import * as INTL                       from '../../../utils/texts';
import CreateForm                      from './warehouseForms/create/createForm';
import ModalWindow                     from '../../shared/modalWindow/modalWindow';
import PageTamplate                    from '../../shared/pageTemplate/pageTamplate';
import WarehousesHeaderRightside       from './warehouseItem/warehousesHeaderRightside/warehousesHeaderRightside';
import WarehousesList                  from './warehousesList/warehousesList';

import './warehouses.scss';

const Warehouses = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const warehouses = useSelector(state => state.warehouse.warehouses);
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getWarehouses());
    }, []);

    return (
        <>
            <PageTamplate
                pageName={INTL.warehousesPage}
                extraClassName='warehouses'
                rightsideComponent={<WarehousesHeaderRightside setIsModalOpen={setIsCreateModalOpen}/>}
            >
                <WarehousesList warehouses={warehouses}/>
            </PageTamplate>
            <ModalWindow 
                open={isCreateModalOpen} 
                onClose={() => openCloseModal(setIsCreateModalOpen, false)}
                actionName={INTL.createWarehouse}
            >
                <CreateForm setIsCreateModalOpen={setIsCreateModalOpen}/>
            </ModalWindow>
        </>
    )
}

export default Warehouses;