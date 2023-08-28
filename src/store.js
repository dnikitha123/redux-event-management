import { createStore } from 'redux';
import eventReducer from './reducers/reducers';

const store = createStore(eventReducer);

export default store;
