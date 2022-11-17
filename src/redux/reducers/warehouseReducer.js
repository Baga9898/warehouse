const defaultState = {
    currentWarehouse: {},
    mode: 'Сreate',
    warehouses: [],
}

const ADD_WAREHOUSE            = 'ADD_WAREHOUSE';
const GET_CURRENT_WAREHOUSE    = 'GET_CURRENT_WAREHOUSE';
const GET_WAREHOUSES           = 'GET_WAREHOUSES';
const SET_DEFAULT_WAREHOUSE    = 'SET_DEFAULT_WAREHOUSE';
const SET_MODE                 = 'SET_MODE';

export const warehouseReducer = (state=defaultState, action) => {
    switch (action.type) {
        case ADD_WAREHOUSE:
            return {...state, warehouses: [...state.warehouses, action.payload]};

        case GET_CURRENT_WAREHOUSE:
            return {...state, currentWarehouse: action.payload};
            
        case GET_WAREHOUSES:
            return {...state, warehouses: [...action.payload]};

        case SET_DEFAULT_WAREHOUSE:
            return {...state, currentWarehouse: {}, mode: 'Create'};

        case SET_MODE:
            return {...state, mode: action.payload};
    
        default:
            return state;
    }
}