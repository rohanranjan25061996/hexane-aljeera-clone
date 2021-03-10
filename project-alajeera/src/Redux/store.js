import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer";
import ReduxThunk from "redux-thunk";
const composeEnhancer =
  (typeof Window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancer = composeEnhancer(applyMiddleware(ReduxThunk));
export const store = createStore(reducer, enhancer);
