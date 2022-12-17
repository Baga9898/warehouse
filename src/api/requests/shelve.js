import { API }     from '../instance';
import { Paths }   from '../constants';

export const addShelve = (cellName, warehouseId, shelveForm) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.shelve}?warehouseId=${warehouseId}`)
            .then((response) => {
                const currentRackShelvesLen = response.data.filter((shelve) => shelve.rackId === cellName).length;
                API.post(`${Paths.shelve}?warehouseId=${warehouseId}`, {
                    ...shelveForm,
                    rackId: cellName,
                    shelve: `${warehouseId}.${cellName}.${currentRackShelvesLen + 1}`,
                })
                .then((response) => {
                    console.log(response.data);
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