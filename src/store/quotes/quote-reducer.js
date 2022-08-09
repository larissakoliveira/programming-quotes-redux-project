const getListQuotes = (_state, _action) => {};

const setQuotesList = (state, action) => {
    state.data.list = action.payload;
};

const setSettings = (state, action) => {
    state.settings = { ...state.settings, ...action.payload };
};
  
const setError = (state, action) => {
    state.error = action.payload;
};

const reducers = {
    getListQuotes,
    setSettings,
    setQuotesList,
    setError
};
  
  export default reducers;
  