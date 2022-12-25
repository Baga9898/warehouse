import { useSelector }                          from 'react-redux';
import React                                    from 'react';

import Cell                                     from '../cell/cell';

import { createWarehouse, isRackFilledCheck }   from '../../../../../utils/helpers/warehouse.helpers';

const WarehouseTable = () => {
    const currentRacks = useSelector(state => state.racks.racks);

    const cells = (createWarehouse(19, 19));

    return (
        <table className='warehouseItem__table'>
            <tbody>
                {/* Вынести в отдельный компонент. */}
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
    )
}

export default WarehouseTable;