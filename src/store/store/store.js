import { all } from 'redux-saga/effects';
import quoteSaga from '../quotes/quote-saga';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { quoteReducer } from '../quotes/quote-slice';

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
  quote: quoteReducer,
  },
  middleware: [saga]
});

function* storeSaga() {
  yield all([
    ...quoteSaga
  ]);
}

saga.run(storeSaga);

export default store;