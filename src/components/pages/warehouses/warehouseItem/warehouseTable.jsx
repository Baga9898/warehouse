import React                   from 'react';

import Cell                    from './cell';

import { isRackFilledCheck }   from '../../../../utils/helpers/warehouse.helpers';

const WarehouseTable = ({ cells, currentRacks }) => {
  return (
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
  )
}

export default WarehouseTable;