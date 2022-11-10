import { SelectableGroup }            from 'react-selectable-fast';
import { useDispatch, useSelector }   from 'react-redux';
import React, { useEffect }           from 'react';

import { getWarehouseRacks }          from '../../../../api/requests/warehouses';
import { 
    createWarehouse, 
    isRackFilledCheck,
    handleSelecting, 
    handleSelectionFinish,
}                                     from '../../../../utils/helpers/warehouse.helpers';
import Cell                           from './cell';

import './warehouseItem.scss';

const WarehouseItem = () => {
    const dispatch = useDispatch();
    const currentRacks = useSelector(state => state.warehouse.racks);

    useEffect(() => {
        dispatch(getWarehouseRacks(1));
    }, [])

    const cells = (createWarehouse(19, 35));

    return (
    <section className='warehouseItem'>
        <h1>warehouseItem</h1>
        <div className='warehouseItem__table_wrapper'>
            <SelectableGroup
                className="main"
                clickClassName="tick"
                enableDeselect
                tolerance={0}
                globalMouse={false}
                allowClickWithoutSelected={false}
                duringSelection={handleSelecting}
                onSelectionFinish={handleSelectionFinish}
            >
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
            </SelectableGroup>
        </div>
    </section>
    )
}

export default WarehouseItem;