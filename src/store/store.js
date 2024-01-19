import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../counter/counterSlice';
import postsSlice from '../posts/postsSlice';
import createSagaMiddleware from "@redux-saga/core";
import userslice from '../user/userslice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false
    }).concat(sagaMiddleware),
  reducer: {
    counter: counterSlice,
    user:userslice 
   },

});

sagaMiddleware.run(rootSaga);