import { useDispatch, useSelector }   from 'react-redux';
import React, { useEffect }           from 'react';

import { getWarehouseRacks }          from '../../../../api/requests/warehouses';
import WarehouseTable                 from './warehouseTable';
import WHSSelectableGroup             from '../../../shared/whsSelectableGroup/whsSelectableGroup';

import { createWarehouse }            from '../../../../utils/helpers/warehouse.helpers';

import './warehouseItem.scss';

const WarehouseItem = () => {
    const dispatch = useDispatch();
    const currentRacks = useSelector(state => state.warehouse.racks);

    useEffect(() => {
        dispatch(getWarehouseRacks(1));
    }, [])

    const cells = (createWarehouse(19, 19));

    return (
    <section className='warehouseItem'>
        <h1>warehouseItem</h1>
        <div className='warehouseItem__table_wrapper'>
            <WHSSelectableGroup>
                <WarehouseTable cells={cells} currentRacks={currentRacks}/>
            </WHSSelectableGroup>
        </div>
    </section>
    )
}

export default WarehouseItem;