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
                dispatch({ type: 'SET_CURRENT_RACK', payload:  response.data[chosenCellIndex] || undefined});
            })
        } catch (error) {
            console.log(error);
        } finally {
            // Loader end
        }
    }
}

export const addRack = (currentRackNum, rackForm) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.post(Paths.rack , {
                ...rackForm, cell: currentRackNum,
            })
            .then(() => {
                dispatch({ type: 'ADD_RACK', payload: {...rackForm, cell: currentRackNum} })
                // Success notification toastify here.
            })
        } catch (error) {
            console.error(error);
            // Failed notification toastify here.
        } finally {
            // Loader end
        }
    }
}
