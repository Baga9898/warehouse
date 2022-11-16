const defaultState = {
    currentWarehouseId: null,
    mode: 'Сreate',
    racks: [],
    warehouses: [],
}

const GET_WAREHOUSES           = 'GET_WAREHOUSES';
const SET_CURRENT_WAREHOUSE_ID = 'SET_CURRENT_WAREHOUSE_ID';
const SET_DEFAULT_WAREHOUSE    = 'SET_DEFAULT_WAREHOUSE';
const SET_MODE                 = 'SET_MODE';

export const warehouseReducer = (state=defaultState, action) => {
    switch (action.type) {
        case GET_WAREHOUSES:
            return {...state, warehouses: [...action.payload]};

        case SET_CURRENT_WAREHOUSE_ID:
            return {...state, currentWarehouseId: action.payload};

        case SET_DEFAULT_WAREHOUSE:
            return {...state, racks: [], mode: 'Create', currentWarehouseId: null};

        case SET_MODE:
            return {...state, mode: action.payload};
    
        default:
            return state;
    }
}