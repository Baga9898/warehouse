import { useDispatch, useSelector }     from 'react-redux';
import { useParams }                    from 'react-router-dom';
import React, { useEffect }             from 'react';

import { getCurrentWarehouse }          from '../../../../api/requests/warehouses';
import { getWarehouseRacks }            from '../../../../api/requests/racks';
import ModalWindow                      from '../../../shared/modalWindow/modalWindow';
import ModeSelect                       from '../../../shared/modeSelect/modeSelect';
import PageTamplate                     from '../../../shared/pageTemplate/pageTamplate';
import Rack                             from '../../rack/rack';
import WarehouseTable                   from './warehouseTable';
import WHSSelectableGroup               from '../../../shared/whsSelectableGroup/whsSelectableGroup';

import './warehouseItem.scss';

const WarehouseItem = () => {
    const dispatch = useDispatch();
    const currentWarehouse = useSelector(state => state.warehouse.currentWarehouse);
    const chosenRack = useSelector(state => state.racks.currentRack);
    const isRackModalOpen = useSelector(state => state.racks.isRackModalOpen);
    const {id} = useParams();

    useEffect(() => {
        dispatch({ type: 'SET_DEFAULT_WAREHOUSE' });
        dispatch({ type: 'SET_DEFAULT_RACKS' });
        dispatch(getCurrentWarehouse(id));
        dispatch(getWarehouseRacks(id));
    }, []);

    const closeRackModal = () => {
        dispatch({ type: 'SET_IS_RACK_MODAL_OPEN', payload: false });
    }

    return (
        <PageTamplate
            pageName={currentWarehouse.name}
            extraClassName='warehouseItem'
            rightsideComponent={<ModeSelect />}
            isWithHistory
        >
            <div className='warehouseItem__table_wrapper'>
                <WHSSelectableGroup>
                    <WarehouseTable />
                </WHSSelectableGroup>
            </div>
            <ModalWindow 
                open={isRackModalOpen} 
                onClose={() => closeRackModal()} 
                actionName={chosenRack ? 'rack' : 'Create'}
            >
                <Rack rack={chosenRack} warehouseId={id} />
            </ModalWindow>
        </PageTamplate>
    )
}

export default WarehouseItem;