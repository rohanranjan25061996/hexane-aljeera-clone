import {combineReducers, createStore, compose, applyMiddleware} from "redux"
import { economyReducer } from "./Economy/reducer";



const rootReducer = combineReducers( { 
    eco: economyReducer
 } )


const customMiddleWare = store => next => action =>{

    return typeof action === "function" ? action(store.dispatch, store.getState) : next(action);
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enchancer = composeEnhancers(applyMiddleware(customMiddleWare))

export const store = createStore( rootReducer, enchancer )