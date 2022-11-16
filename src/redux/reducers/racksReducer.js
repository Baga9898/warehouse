const defaultState = {
    racks: [],
}

const DELETE_RACKS      = 'DELETE_RACKS';
const GET_RACKS         = 'GET_RACKS';
const SET_DEFAULT_RACKS = 'SET_DEFAULT_RACKS';
const SET_RACKS         = 'SET_RACKS';

export const racksReducer = (state=defaultState, action) => {
    switch (action.type) {
        case DELETE_RACKS:
            return {...state, racks: [...action.payload]};

        case GET_RACKS:
            return {...state, racks: [...state.racks, ...action.payload]};

        case SET_DEFAULT_RACKS:
            return {...state, racks: []};

        case SET_RACKS:
            return {...state, racks: [...action.payload]};

        default:
            return state;
    }
}