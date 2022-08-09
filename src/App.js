import './App.css';
import { Quotes } from './components/Quote';
 import axiosInstance from './module/axios/axios'
// import getQuotes from './store/quotes/quote-saga';

axiosInstance.get('/quotes').then(response => {
  console.log(response.data)
}
).catch(err => console.log(err))

function App() {

  return (
    <Quotes/>
  );
}

export default App;
