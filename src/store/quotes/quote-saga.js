import { call, put, takeLatest } from "redux-saga/effects";
import quoteService from "../../services/quotes";
import quoteSlice, { quoteActions } from "./quote-slice";

function* getQuote() {
    yield put(quoteActions.setSettings({ loading: true }));
    try {
        const fetchedData = yield call(quoteService().getQuote)
        yield put(quoteActions.setData({ quote: fetchedData.data }));
        yield put(quoteActions.setError(''));
    } catch (exception) {
        yield put(quoteActions.setError(exception.message));
    } finally{
        yield put(quoteActions.setSettings({ loading: false }));
    }
};

const quoteSaga = [
    takeLatest('quote/getQuote', getQuote)
]

export default quoteSaga
