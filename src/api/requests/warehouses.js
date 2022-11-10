import { API } from '../instance';
import { Paths } from '../constants';

export const getWarehouseRacks = (warehouseId) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.warehouses}/${warehouseId}`)
            .then(response => {
                const racks = response.data.warehouse.racks.map(rack => rack.rowCell);
                dispatch({ type: 'GET_RACKS', payload: racks });
            });
        } catch (error) {
            console.log('Error notification here');
        } finally {
            // Loader end
        }
    }
}