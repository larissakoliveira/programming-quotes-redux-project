const getQuote = (_state, _action) => {};

const setData = (state, action) => {
    state.data.list = action.payload;
};

const setSettings = (state, action) => {
    state.settings = { ...state.settings, ...action.payload };
};
  
const setError = (state, action) => {
    state.error = action.payload;
};

const reducers = {
    getQuote,
    setSettings,
    setData,
    setError
};
  
  export default reducers;
  