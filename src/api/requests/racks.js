import { API }     from '../instance';
import { Paths }   from '../constants';

export const getWarehouseRacks = (warehouseId) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.warehouse}/${warehouseId}`)
            .then(response => {
                dispatch({ type: 'GET_RACKS', payload: response.data.racks });
            });
        } catch (error) {
            console.log('Error notification here get racks');
        } finally {
            // Loader end
        }
    }
}

export const setWarehouseRacks = (warehouseId, newRacks) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.warehouse}/${warehouseId}`)
            .then(response => {
                const actuallyRacks = [...new Set([...response.data.racks, ...newRacks])];
                API.put(`${Paths.warehouse}/${warehouseId}`, {
                    racks: actuallyRacks,
                })
                .then(() => {
                    dispatch({ type: 'SET_RACKS', payload:  actuallyRacks});
                })
            })
        } catch (error) {
            console.log('Error notification here set racks');
        } finally{
            // Loader end
        }
    }
}

export const deleteRacks = (warehouseId, deleteRacks) => {
    return async (dispatch) => {
        // Loader start
        try {
            await API.get(`${Paths.warehouse}/${warehouseId}`)
            .then(response => {
                const allRacks = response.data.racks;
                const actuallyRacks = allRacks.reduce((acc, item) => {
                    if (!deleteRacks.includes(item)) acc.push(item);
                    return acc;
                }, []);
    
                API.put(`${Paths.warehouse}/${warehouseId}`, {
                    racks: actuallyRacks,
                })
                .then(() => {
                    dispatch({ type: 'DELETE_RACKS', payload: actuallyRacks });
                })

            })
        } catch (error) {
            console.log('Error notification here delete');
        } finally {
            // Loader end
        }
    }
}
