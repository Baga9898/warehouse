import React from 'react';
import { SelectableGroup } from "react-selectable-fast";
import Cell from './cell';
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

    const cells = (createWarehouse(35, 35));

    const handleSelecting = (items) => {
        console.log("selecting:", items);
    };

    const handleSelectionFinish = (items) => {
        console.log("finish selecting:", 'yep');
    };

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
                                    <Cell key={`${row}-${col}`} col={col} row={row} />
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