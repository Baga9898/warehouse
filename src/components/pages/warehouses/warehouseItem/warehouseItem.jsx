import { useDispatch, useSelector }   from 'react-redux';
import React, { useEffect }           from 'react';

import { getWarehouseRacks }          from '../../../../api/requests/warehouses';

import { 
    createWarehouse, 
    isRackFilledCheck,
}                                     from '../../../../utils/helpers/warehouse.helpers';
import WHSSelectableGroup             from '../../../shared/whsSelectableGroup/whsSelectableGroup';
import Cell                           from './cell';

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
                <table className='warehouseItem__table'>
                    <tbody>
                        {cells.row.map(row => (
                            <tr key={row}>
                                {cells.col.map(col => (
                                    <Cell 
                                        key={`${row}-${col}`} 
                                        col={col} 
                                        row={row} 
                                        filled={isRackFilledCheck(currentRacks, `${col}-${row}`)}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </WHSSelectableGroup>
        </div>
    </section>
    )
}

export default WarehouseItem;