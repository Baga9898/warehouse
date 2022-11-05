import { createStore, combineReducers }   from "redux";

import { sidebarMenuReducer }             from './reducers/sidebarMenuReducer';

const rootReducer = combineReducers({
    sidebarMenu: sidebarMenuReducer,
})

export const store = createStore(rootReducer);