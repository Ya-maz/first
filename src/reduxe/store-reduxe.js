import {combineReducers, createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let manyReducer = combineReducers({
    profile:  profileReducer,
    message: messageReducer

});
let store = createStore(manyReducer);

export default store