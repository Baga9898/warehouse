import { useSelector }                          from 'react-redux';
import React, { useState }                      from 'react';

import Cell                                     from './cell';
import ModalWindow                              from '../../../shared/modalWindow/modalWindow';
import Rack                                     from '../../rack/rack';

import { createWarehouse, isRackFilledCheck }   from '../../../../utils/helpers/warehouse.helpers';
import { openCloseModal }                       from './../../../../utils/helpers/warehouse.helpers';

const WarehouseTable = () => {
    const [isRackModalOpen, setIsRackModalOpen] = useState(false);
    const currentRacks = useSelector(state => state.racks.racks);

    const cells = (createWarehouse(19, 19));

    return (
        <>
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
                                    setIsRackModalOpen={setIsRackModalOpen}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalWindow open={isRackModalOpen} onClose={() => openCloseModal(setIsRackModalOpen, false)} >
                <Rack />
            </ModalWindow>
        </>
    )
}

export default WarehouseTable;