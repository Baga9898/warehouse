import { createStore, combineReducers, applyMiddleware }   from "redux";
import thunk                                               from "redux-thunk";

import { sidebarMenuReducer }                              from './reducers/sidebarMenuReducer';
import { warehouseReducer }                                from './reducers/warehouseReducer';

const rootReducer = combineReducers({
    sidebarMenu: sidebarMenuReducer,
    warehouse: warehouseReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));