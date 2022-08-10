import Loading from '../Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quoteActions } from '../../store/quotes/quote-slice';
import { loadingSelector, quoteSelector } from '../../store/quotes/quote-selector';

export const Quote = () => {
  // const loading = useSelector(loadingSelector);
  const quote = useSelector(quoteSelector);
  const dispatch = useDispatch();

  useEffect(
    () => {
        dispatch(quoteActions.getQuote())
        console.log("entrou")
        console.log(quote)
    }, [],
  )

  const getNewQuote = () => {
    console.log("entrou")
    dispatch(quoteActions.getQuote())
  }

  return (
    <>
      <h1 className='text-amber-50'>
        {/* {
          loading ? 
          <Loading/> :  */}
        {/* } */}
         AQUI {quote.list.quote.en}
      </h1>
      <button className='hover:bg-sky-200 hover:text-blue-900 bg-blue-900 text-blue-50 rounded p-2' onClick={getNewQuote}>New Quote</button>
    </>
  )
}
