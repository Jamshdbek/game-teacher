import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducers';  // Assuming your reducer file is 'reducers/index.js'

const store = configureStore({
  reducer: rootReducer
});

export default store;
