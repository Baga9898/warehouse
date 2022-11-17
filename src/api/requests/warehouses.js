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
            console.log('Error notification here get warehouses');
        } finally {
            // Loader end
        }
    }
}

export const getCurrentWarehouse = (id) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.warehouse}/${id}`)
            .then((response) => {
                dispatch({ type: 'GET_CURRENT_WAREHOUSE', payload: response.data});
            })
        } catch (error) {
            console.log('Error notification here get current warehouse');
        } finally {
            // Loader end
        }
    }
}

export const addWarehouse = (warehouse) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.post(`${Paths.warehouse}`, { ...warehouse })
            .then(() => {
                console.log(...warehouse);
                dispatch({ type: 'ADD_WAREHOUSE', payload: { ...warehouse } });
            })
        } catch (error) {
            console.log('Error notification here get add warehouse');
        } finally {
            // Loader end
        }
    }
}
