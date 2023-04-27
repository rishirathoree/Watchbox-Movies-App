import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { Datareducer } from "../reducers/Datareducer";

const rootReducer   = combineReducers({
    Data:Datareducer,
})

const middleware = [thunk]

const store = createStore(
    rootReducer ,
    composeWithDevTools(applyMiddleware(...middleware)),
)


export default store;
