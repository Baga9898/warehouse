const defaultState = {
    currentRack: {},
};

const SET_CURRENT_RACK = 'SET_CURRENT_RACK';

export const rackReducer = (state=defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_RACK:
            return { ...state, currentRack: action.payload };
    
        default:
            return state;
    }
}