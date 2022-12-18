const defaultState = {
    currentRackShelves: [],
};

const ADD_SHELVE  = 'ADD_SHELVE';
const GET_SHELVES = 'GET_SHELVES';

export const shelveReducer = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_SHELVE:
            return {...state, currentRackShelves: [...state.currentRackShelves, action.payload]};

        case GET_SHELVES:
            return {...state, currentRackShelves: action.payload};
        
        default:
            return state;
    }
}