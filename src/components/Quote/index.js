 import Loading from '../Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quoteActions } from '../../store/quotes/quote-slice';
import { loadingSelector, quoteSelector } from '../../store/quotes/quote-selector';

export const Quote = () => {
  const loading = useSelector(loadingSelector);
  const quote = useSelector(quoteSelector);
  const dispatch = useDispatch();

  useEffect(
    () => {
        dispatch(quoteActions.getQuote())
    }, [],
  )

  const getNewQuote = () => {
    dispatch(quoteActions.getQuote())
  }

  return (
    <div className='m-10 flex flex-col items-center'>
      <h1 className='text-amber-50 text-2xl min-h-max'>
       {
         loading ? 
         <Loading/> : 
         quote?.en
        }
      </h1>
      <button className='font-black mt-48 text-2xl hover:bg-sky-200 hover:text-blue-900 bg-blue-900 text-blue-50 rounded p-2' onClick={getNewQuote}>New Quote</button>
    </div>
  )
}
