import { createSlice } from "@reduxjs/toolkit"
import reducers from "./quote-reducer"

const initialState = {
    data: {
        quote: [],
    },
    settings: {
        loading: false,
      },
    error: '',
};

const quoteSlice = createSlice({
    name: 'quote',
    reducers,
    initialState,
});

const {
    actions: quoteActions,
    reducer: quoteReducer,
} = quoteSlice

export {
    quoteActions,
    quoteReducer,
  };

  export default quoteSlice;