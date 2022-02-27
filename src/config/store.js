import { createStore } from 'redux';
import loginReducer from '../redux/reducers/login';
import collectionReducer from '../redux/reducers/collections';
import {combineReducers} from "redux"; 
import thunk from 'redux-thunk';
import { loadState,  saveState} from './localStorage';

const allReducers = combineReducers({
  user:loginReducer,
  collection: collectionReducer,
})

let persistedState = loadState()


const  store =  createStore ({
    reducer:allReducers,
    middleware:[thunk],
    persistedState
  
})
store.subsscribe(()=>{
  saveState(store.getState())
})

export {
  store
}


