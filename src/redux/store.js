import { composeWithDevTools }                             from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware }   from "redux";
import thunk                                               from "redux-thunk";

import { racksReducer }                                    from './reducers/racksReducer';
import { shelveReducer }                                   from "./reducers/shelveReducer";
import { sidebarMenuReducer }                              from './reducers/sidebarMenuReducer';
import { warehouseReducer }                                from './reducers/warehouseReducer';

const rootReducer = combineReducers({
    racks:       racksReducer,
    shelve:      shelveReducer,
    sidebarMenu: sidebarMenuReducer,
    warehouse:   warehouseReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));