import { API }     from '../instance';
import { Paths }   from '../constants';

export const addShelve = (cellName, warehouseId, shelveForm) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.shelve}?warehouseId=${warehouseId}`)
            .then((response) => {
                const currentRackShelvesLength = response.data.filter((shelve) => shelve.rackId === cellName).length;
                API.post(`${Paths.shelve}?warehouseId=${warehouseId}`, {
                    ...shelveForm,
                    rackId: cellName,
                    shelve: `${warehouseId}.${cellName}.${currentRackShelvesLength + 1}`,
                })
                .then((response) => {
                    dispatch({ type: 'ADD_SHELVE', payload: response.data })
                    // Success notification toastify here.
                })
            })
        } catch (error) {
            console.log(error);
        } finally {
            // Loader end
        }
    }
}

export const getShelves = (cellName, warehouseId) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.shelve}?warehouseId=${warehouseId}`)
            .then((response) => {
                const currentRackShelves = response.data.filter((shelve) => shelve.rackId === cellName);
                dispatch({ type: 'GET_SHELVES', payload: currentRackShelves });
            })
        } catch (error) {
            console.error(error);
        } finally {
            // Loader end
        }
    }
}
