import teamsReducer from './teamsReducer'
import timeReducer from './timeReducer'
import { combineReducers, createStore } from 'redux'

export default () => {
    const store = createStore(combineReducers({teamsReducer, timeReducer}));
    return store;
};
