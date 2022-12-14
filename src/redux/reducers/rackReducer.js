const defaultState = {
    currentRack: undefined,
    currentRackNum: '',
    isRackModalOpen: false,
};

const ADD_SHELVE             = 'ADD_SHELVE';
const SET_CURRENT_RACK       = 'SET_CURRENT_RACK';
const SET_CURRENT_RACK_NUM   = 'SET_CURRENT_RACK_NUM';
const SET_IS_RACK_MODAL_OPEN = 'SET_IS_RACK_MODAL_OPEN';

export const rackReducer = (state=defaultState, action) => {
    switch (action.type) {
        case ADD_SHELVE:
            return { ...state, currentRack: [...state.currentRack.shelves, action.payload],}

        case SET_CURRENT_RACK:
            return { ...state, currentRack: action.payload };

        case SET_CURRENT_RACK_NUM:
            return { ...state, currentRackNum: action.payload };

        case SET_IS_RACK_MODAL_OPEN:
            return { ...state, isRackModalOpen: action.payload };
    
        default:
            return state;
    }
}