import { call, put, takeLatest } from "redux-saga/effects";
import quotesService from "../../services/quotes";
import { quoteActions } from "./quote-slice";

function* getQuotes() {
    yield put(quoteActions.setSettings({ loading: true }));
    try {
        const fetchedData = yield call(
            quotesService().getQuoteList
        )
        yield put(quoteActions.setQuotesList(fetchedData));
        yield put(quoteActions.setError(''));
    } catch (error) {
        yield put(quoteActions.setError(error.message));
    }
    yield put(quoteActions.setSettings({ loading: false }));
};

export default function* quoteSaga() {
    yield takeLatest('quote/getListQuotes', getQuotes);
};

