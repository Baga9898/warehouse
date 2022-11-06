import React from 'react';
import './warehouseItem.scss';

const WarehouseItem = () => {

    //TODO: Вынести в хелперы.
    const createWarehouse = (cols, rows) => {
        let newArray = new Array(rows);
        let resultColumns = [];
        let resultRows = [];

        for (let i = 0; i < rows; i++) {
            newArray[i] = new Array(rows);

            for (let j = 0; j < cols; j++) {
                newArray[i][j] = "[" + i + "," + j + "]";
                resultRows.push(i);
                resultColumns.push(j);
            }
        }

        return {
            col: [...new Set(resultColumns)], 
            row: [...new Set(resultRows)],
        };
    }

    const cells = (createWarehouse(30, 50));


    return (
    <section className='warehouseItem'>
        <h1>warehouseItem</h1>
        <div id='whtable' className='warehouseItem__table_wrapper'>
            <table className='warehouseItem__table'>
                <tbody>
                    {cells.row.map(row => (
                        <tr>
                            {cells.col.map(col => (
                                <td>{`${row}-${col}`}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
    )
}

export default WarehouseItem;