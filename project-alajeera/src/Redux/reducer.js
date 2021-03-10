import {
  GET_HEALTH_NEWS_FAILURE,
  GET_HEALTH_NEWS_REQUEST,
  GET_HEALTH_NEWS_SUCCESS,
} from "./actionTypes";

const initState = {
  data: [],
  isLoading: true,
  isError: false,
};
export const reducer = (state = initState, { payload, type }) => {
  switch (type) {
    case GET_HEALTH_NEWS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_HEALTH_NEWS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case GET_HEALTH_NEWS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
