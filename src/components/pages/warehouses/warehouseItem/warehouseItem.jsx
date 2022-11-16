import { useDispatch, useSelector }   from 'react-redux';
import { useParams }                  from 'react-router-dom';
import React, { useEffect }           from 'react';

import { getCurrentWarehouse }        from '../../../../api/requests/warehouses';
import { getWarehouseRacks }          from '../../../../api/requests/racks';
import ModeSelect                     from '../../../shared/modeSelect/modeSelect';
import WarehouseTable                 from './warehouseTable';
import WHSSelectableGroup             from '../../../shared/whsSelectableGroup/whsSelectableGroup';

import './warehouseItem.scss';

const WarehouseItem = () => {
    const dispatch = useDispatch();
    const currentWarehouse = useSelector(state => state.warehouse.currentWarehouse);
    const {id} = useParams();

    useEffect(() => {
        dispatch({ type: 'SET_DEFAULT_WAREHOUSE' });
        dispatch({ type: 'SET_DEFAULT_RACKS' });
        dispatch(getCurrentWarehouse(id));
        dispatch(getWarehouseRacks(id));
    }, [])

    return (
    <section className='warehouseItem'>
        <div className='page__header'>
            <h1>{currentWarehouse.name}</h1>
            <div>
                <ModeSelect />
            </div>
        </div>
        <div className='warehouseItem__table_wrapper'>
            <WHSSelectableGroup>
                <WarehouseTable />
            </WHSSelectableGroup>
        </div>
    </section>
    )
}

export default WarehouseItem;