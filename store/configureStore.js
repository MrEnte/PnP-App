import { createStore, combineReducers } from 'redux';
import characterReducer from '../src/reducers/characterReducer';

const rootReducer = combineReducers(
    { CharacterReducer: characterReducer },
);
const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
