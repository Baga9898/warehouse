import { useDispatch, useSelector }   from 'react-redux';
import React, { useEffect, useState }           from 'react';

import { getWarehouseRacks }          from '../../../../api/requests/warehouses';
import WarehouseTable                 from './warehouseTable';
import WHSSelectableGroup             from '../../../shared/whsSelectableGroup/whsSelectableGroup';

import { createWarehouse }            from '../../../../utils/helpers/warehouse.helpers';

import './warehouseItem.scss';
import ModeSelect from '../../../shared/modeSelect/modeSelect';

const WarehouseItem = () => {
    const [isModeVisible, setIsModeVisible] = useState(false);

    const dispatch = useDispatch();
    const currentRacks = useSelector(state => state.warehouse.racks);

    useEffect(() => {
        dispatch(getWarehouseRacks(1));
    }, [])

    const cells = (createWarehouse(19, 19));

    return (
    <section className='warehouseItem'>
        <div className='page__header'>
            <h1>warehouseItem</h1>
            <div>
                <ModeSelect items={[ 'Create', 'Delete', 'Edit' ]}/>
            </div>
        </div>
        <div className='warehouseItem__table_wrapper'>
            <WHSSelectableGroup>
                <WarehouseTable cells={cells} currentRacks={currentRacks}/>
            </WHSSelectableGroup>
        </div>
    </section>
    )
}

export default WarehouseItem;