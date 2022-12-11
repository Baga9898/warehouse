const defaultState = {
    currentRack: undefined,
    isRackModalOpen: false,
};

const SET_CURRENT_RACK       = 'SET_CURRENT_RACK';
const SET_IS_RACK_MODAL_OPEN = 'SET_IS_RACK_MODAL_OPEN';

export const rackReducer = (state=defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_RACK:
            return { ...state, currentRack: action.payload };

        case SET_IS_RACK_MODAL_OPEN:
            return { ...state, isRackModalOpen: action.payload };
    
        default:
            return state;
    }
}