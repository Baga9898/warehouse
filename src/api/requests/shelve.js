import { API }     from '../instance';
import { Paths }   from '../constants';

export const addShelve = (cellName, warehouseId, shelveForm) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.put(`${Paths.shelve}?warehouseId=${warehouseId}`, {
                
            })
        } catch (error) {
            console.log(error);
        } finally {
            // Loader end
        }
    }
}