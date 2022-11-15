const defaultState = {
    currentWarehouseId: null,
    mode: 'Сreate',
    racks: [],
    warehouses: [],
}

const DELETE_RACKS             = 'DELETE_RACKS';
const GET_RACKS                = 'GET_RACKS';
const GET_WAREHOUSES           = 'GET_WAREHOUSES';
const SET_CURRENT_WAREHOUSE_ID = 'SET_CURRENT_WAREHOUSE_ID';
const SET_DEFAULT_WAREHOUSE    = 'SET_DEFAULT_WAREHOUSE';
const SET_MODE                 = 'SET_MODE';
const SET_RACKS                = 'SET_RACKS';

export const warehouseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DELETE_RACKS:
            return {...state, racks: [...action.payload]};

        case GET_RACKS:
            return {...state, racks: [...state.racks, ...action.payload]};

        case GET_WAREHOUSES:
            return {...state, warehouses: [...action.payload]};

        case SET_CURRENT_WAREHOUSE_ID:
            return {...state, currentWarehouseId: action.payload};

        case SET_DEFAULT_WAREHOUSE:
            return {...state, racks: [], mode: 'Create', currentWarehouseId: null};

        case SET_MODE:
            return {...state, mode: action.payload};

        case SET_RACKS:
            return {...state, racks: [...action.payload]};
    
        default:
            return state;
    }
}