import { PENDINGFETCHREQUESTPOPULAR, SUCCESSREQUESTPOPULAR, FAILEDREQUESTPOPULAR } from "../actions/Dataactions";

const initialState = {
  request1: { data: [], loading: false, error: null },
};

export const Datareducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDINGFETCHREQUESTPOPULAR:
      return { ...state, request1: { ...state.request1, loading: true } };
    case SUCCESSREQUESTPOPULAR:
      return {
        ...state,
        request1: { ...state.request1, data: action.payload, loading: false, error: null },
      };
    case FAILEDREQUESTPOPULAR:
      return {
        ...state,
        request1: { ...state.request1, loading: false, error: action.payload },
      };
    default:
      return state;
  }
};
