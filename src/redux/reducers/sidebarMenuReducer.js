const defaultState = {
    sidebarIsOpen: false,
}

const OPEN_CLOSE_SIDEBAR = 'OPEN_CLOSE_SIDEBAR';
const CLOSE_SIDEBAR      = 'CLOSE_SIDEBAR';

export const sidebarMenuReducer = (state=defaultState, action) => {
    switch (action.type) {
        case OPEN_CLOSE_SIDEBAR:
            return {...state, sidebarIsOpen: !state.sidebarIsOpen};

        case CLOSE_SIDEBAR:
            return {...state, sidebarIsOpen: false};
    
        default:
            return state;
    }
}