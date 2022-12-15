const defaultState = {
    currentRack: undefined,
    currentRackNum: '',
    isRackModalOpen: false,
    racks: [],
}

const ADD_RACK               = 'ADD_RACK';
const DELETE_RACKS           = 'DELETE_RACKS';
const GET_RACKS              = 'GET_RACKS';
const SET_CURRENT_RACK       = 'SET_CURRENT_RACK';
const SET_CURRENT_RACK_NUM   = 'SET_CURRENT_RACK_NUM';
const SET_DEFAULT_RACKS      = 'SET_DEFAULT_RACKS';
const SET_IS_RACK_MODAL_OPEN = 'SET_IS_RACK_MODAL_OPEN';
const SET_RACKS              = 'SET_RACKS';

export const racksReducer = (state=defaultState, action) => {
    switch (action.type) {
        case DELETE_RACKS:
            return {...state, racks: [...action.payload]};

        case GET_RACKS:
            return {...state, racks: [...state.racks, ...action.payload]};

        case SET_CURRENT_RACK:
            return { ...state, currentRack: action.payload };

        case SET_CURRENT_RACK_NUM:
            return { ...state, currentRackNum: action.payload };

        case SET_DEFAULT_RACKS:
            return {...state, racks: []};

        case SET_IS_RACK_MODAL_OPEN:
            return { ...state, isRackModalOpen: action.payload };

        case SET_RACKS:
            return {...state, racks: [...action.payload]};

        default:
            return state;
    }
}