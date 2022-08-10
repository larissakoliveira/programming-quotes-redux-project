import axiosInstance from "../module/axios/axios";

const quoteService = () => {

const getQuote = () => 
    axiosInstance.get('/quotes/random')
    .then(response => {
        return response
    }
    ).catch(err => console.log(err))

    return {
        getQuote
    }
}

export default quoteService;
