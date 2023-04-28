import axios from "axios"
import requests from '../Requests'

// popular movies reuqest variable links 
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

// tv shows varibale links 
export const PENDINGFETCHTVSHOW  = 'PENDINGFETCHTVSHOW'
export const SUCCESSTVSHOW  = 'SUCCESSTVSHOW'
export const FAILEDTVSHOW = 'FAILEDTVSHOW'


export const tvShowPending = () => {
    return {type:'PENDINGFETCHTVSHOW'}
}

export const tvShowSuccess = (data) => {
    return {type:'SUCCESSTVSHOW',payload:data}
}

export const tvShowFailed = (err) => {
    return {type:'FAILEDTVSHOW',payload:err}
}

export const fetchTvShows = () => {
  return async (dispatch) => {
    dispatch(tvShowPending());
    try {
      const response = await axios.get(requests.TvShows);
      dispatch(tvShowSuccess(response.data));
    } catch (error) {
      dispatch(tvShowFailed(error));
    }
  };
};
