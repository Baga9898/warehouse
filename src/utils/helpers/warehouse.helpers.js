import { setWarehouseRacks } from './../../api/requests/warehouses';

export const isRackFilledCheck = (currentRacks, rack) => {
    return currentRacks.includes(rack);
}

export const createWarehouse = (cols, rows) => {
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

export const handleSelecting = (items) => {
    // console.log("selecting:", items);
};

export const handleSelectionFinish = (items) => {
    // console.log("finish selecting:", items.map(cell => `${cell.props.col}-${cell.props.row}`));
    setWarehouseRacks(1, items.map(cell => `${cell.props.col}-${cell.props.row}`));
};