import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quotesListSelector } from '../../store/quotes/quote-selector';
import { quoteActions } from '../../store/quotes/quote-slice';

export const Quotes = () => {
    const quotes = useSelector(quotesListSelector);
    const dispatch = useDispatch();

    console.log(quotes.list)

    useEffect(
        () => {
            dispatch(quoteActions.getListQuotes())
        }
    )

  return (
    <div>Quotes here</div>
  )
}