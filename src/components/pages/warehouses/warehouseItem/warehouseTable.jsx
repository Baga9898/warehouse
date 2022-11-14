import { useSelector }         from 'react-redux';
import React                   from 'react';

import Cell                    from './cell';

import { createWarehouse }     from '../../../../utils/helpers/warehouse.helpers';
import { isRackFilledCheck }   from '../../../../utils/helpers/warehouse.helpers';

const WarehouseTable = () => {
    const currentRacks = useSelector(state => state.warehouse.racks);

    console.log(currentRacks);

    const cells = (createWarehouse(19, 19));

    return (
        <table className={'warehouseItem__table'}>
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
    )
}

export default WarehouseTable;