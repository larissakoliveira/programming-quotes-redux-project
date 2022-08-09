import axiosInstance from "../module/axios/axios";

const quotesService = () => {

const getQuoteList = () => axiosInstance.get('/quotes').then(response => {
     console.log(response.data[22].en)
  }
  ).catch(err => console.log(err))

    return {
        getQuoteList
    }
}

export default quotesService;
