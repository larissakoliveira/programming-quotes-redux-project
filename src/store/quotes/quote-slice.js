import { createSlice } from "@reduxjs/toolkit"
import reducers from "./quote-reducer"

const initialState = {
    data: {
        list: [],
    },
    settings: {
        loading: false,
      },
    error: '',
};

const quotesSlice = createSlice({
    name: 'quotes',
    reducers,
    initialState,
});

const {
    actions: quoteActions,
    reducer: quoteReducer,
} = quotesSlice

export {
    quoteActions,
    quoteReducer,
  };

  export default quotesSlice;