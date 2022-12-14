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

export const getUploadedWarehouse = async (id, setWarehouseForm) => {
    // Loader start
    try {
        await API.get(`${Paths.warehouse}/${id}`)
        .then((response) => {
            setWarehouseForm({
                name: response.data.name,
                address: response.data.address,
            });
        })
    } catch (error) {
        console.log(error);
    } finally {
        // Loader end
    }
}

export const addWarehouse = (warehouse) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.post(`${Paths.warehouse}`, { ...warehouse })
            .then((response) => {
                dispatch({ type: 'ADD_WAREHOUSE', payload: response.data });
            })
        } catch (error) {
            console.log(error);
        } finally {
            // Loader end
        }
    }
}

export const deleteWarehouse = (id) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.delete(`${Paths.warehouse}/${id}`)
            .then(() => {
                dispatch({ type: 'DELETE_WAREHOUSE', payload: id });
            })
        } catch (error) {
            console.log(error);
        } finally {
            // Loader end
        }
    }
}

export const updateWarehouse = (id, changedValues) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.put(`${Paths.warehouse}/${id}`, {
                name: changedValues.name,
                address: changedValues.address,
            })
            .then((response) => {
                dispatch({ type: 'UPDATE_WAREHOUSE', payload: response.data})
            })
        } catch (error) {
            console.error(error);
        } finally {
            // Loader end
        }
    }
}
