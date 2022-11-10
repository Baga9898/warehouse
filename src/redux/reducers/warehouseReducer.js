const defaultState = {
    racks: [],
}

const GET_RACKS = 'GET_RACKS';

export const warehouseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_RACKS:
            return {...state, racks: [...state.racks, ...action.payload]};
    
        default:
            return state;
    }
}