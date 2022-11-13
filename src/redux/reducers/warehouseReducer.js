const defaultState = {
    mode: 'Сreate',
    racks: [],
    warehouses: [],
}

const GET_RACKS             = 'GET_RACKS';
const GET_WAREHOUSES        = 'GET_WAREHOUSES';
const SET_DEFAULT_WAREHOUSE = 'SET_DEFAULT_WAREHOUSE';
const SET_MODE              = 'SET_MODE';

export const warehouseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DEFAULT_WAREHOUSE:
            return {...state, racks: [], mode: 'Create'};

        case GET_RACKS:
            return {...state, racks: [...state.racks, ...action.payload]};

        case GET_WAREHOUSES:
            return {...state, warehouses: [...action.payload]};

        case SET_MODE:
            return {...state, mode: action.payload};
    
        default:
            return state;
    }
}