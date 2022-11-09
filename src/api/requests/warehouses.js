import { API } from '../instance';
import { Paths } from '../constants';

export const getWarehouse = async (warehouseId) => {
    // Loader start
    try {
        await API.get(`${Paths.warehouses}/${warehouseId}`)
        .then(response => console.log(response.data.warehouse.racks.map(rack => rack.rowCell)));
    } catch (error) {
        console.log('Error notification here');
    } finally {
        // Loader end
    }
}