import { API }     from '../instance';
import { Paths }   from '../constants';

export const getChosenCell = (cellName, warehouseId) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.rack}?warehouseId=${warehouseId}`)
            .then((response) => {
                const cells = response.data.map((cell) => cell.cell);
                const chosenCellIndex = cells.indexOf(cellName);
                dispatch({ type: 'SET_CURRENT_RACK', payload:  response.data[chosenCellIndex] || {}});
            })
        } catch (error) {
            console.log(error);
        } finally {
            // Loader end
        }
    }
}