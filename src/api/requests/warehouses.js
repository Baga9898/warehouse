import { API }     from '../instance';
import { Paths }   from '../constants';

export const getWarehouses = () => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.warehouse}`)
            .then(response => {
                dispatch({ type: 'GET_WAREHOUSES', payload:  response.data});
            })
        } catch {
            console.log('Error notification here');
        } finally {
            // Loader end
        }
    }
}

export const getWarehouseRacks = (warehouseId) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.warehouse}/${warehouseId}`)
            .then(response => {
                dispatch({ type: 'GET_RACKS', payload: response.data.racks });
            });
        } catch (error) {
            console.log('Error notification here');
        } finally {
            // Loader end
        }
    }
}

export const setWarehouseRacks = async (warehouseId, newRacks) => {
    try {
        await API.get(`${Paths.warehouse}/${warehouseId}`)
        .then(response => {
            API.put(`${Paths.warehouse}/${warehouseId}`, {
                racks: [...new Set([...response.data.racks, ...newRacks])],
            })
        })
    } catch (error) {
        console.log('Error notification here');
    }
}