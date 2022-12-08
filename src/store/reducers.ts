import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../features/counter/counterReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const counterPersistConfig = {
    key: 'counter',
    storage,
}

const reducers = combineReducers({
    counter: persistReducer(counterPersistConfig, counterReducer),
});

export default reducers;
