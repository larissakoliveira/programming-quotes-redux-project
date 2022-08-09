import { all } from 'redux-saga/effects';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import quotesSlice from '../quotes/quote-slice';
import quoteSaga from '../quotes/quote-saga';

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
  quotes: quotesSlice.reducer,
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