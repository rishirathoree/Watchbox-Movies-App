import axios from "axios"
import requests from '../Requests'
export const PENDINGFETCHREQUESTPOPULAR  = 'PENDINGFETCHREQUESTPOPULAR'
export const SUCCESSREQUESTPOPULAR  = 'SUCCESSREQUESTPOPULAR'
export const FAILEDREQUESTPOPULAR = 'FAILEDREQUESTPOPULAR'


export const requestPopularPending = () => {
    return {type:'PENDINGFETCHREQUESTPOPULAR'}
}

export const requestPopularSuccess = (data) => {
    return {type:'SUCCESSREQUESTPOPULAR',payload:data}
}

export const requestPopularFailed = (err) => {
    return {type:'FAILEDREQUESTPOPULAR',payload:err}
}

export const fetchRequestPopular = () => {
    return async (dispatch) => {
      dispatch(requestPopularPending());
      try {
        const response = await axios.get(requests.requestPopular);
        dispatch(requestPopularSuccess(response.data));
      } catch (error) {
        dispatch(requestPopularFailed(error));
      }
    };
  };