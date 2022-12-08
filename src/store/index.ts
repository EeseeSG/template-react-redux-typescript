import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reducer from './reducers';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({ reducer });
const persistor = persistStore(store);

export { store, persistor };
