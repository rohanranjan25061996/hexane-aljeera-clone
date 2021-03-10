import {
  GET_HEALTH_NEWS_REQUEST,
  GET_HEALTH_NEWS_SUCCESS,
  GET_HEALTH_NEWS_FAILURE,
} from "./actionTypes";
import axios from "axios";
const getHealthNewsRequest = () => ({
  type: GET_HEALTH_NEWS_REQUEST,
});

const getHealthNewsSuccess = (payload) => ({
  type: GET_HEALTH_NEWS_SUCCESS,
  payload,
});

const getHealthNewsFailure = () => ({
  type: GET_HEALTH_NEWS_FAILURE,
});

const getHealthNews = (payload) => (dispatch) => {
  dispatch(getHealthNewsRequest());
  axios
    .get(" https://newsapi.org/v2/everything", {
      params: {
        apiKey: "7ee16014a52142bd8b572e3a360ca7d3",
        q: "corona virus",
      },
    })
    .then((res) => {
      dispatch(getHealthNewsSuccess(res.data.articles));
      console.log(res.data.articles);
    })
    .catch((err) => {
      dispatch(getHealthNewsFailure());
    });
}
//     axios
//     .get(" https://fast-lake-64955.herokuapp.com/aljazeera")
//     .then((res) => {
//       dispatch(getHealthNewsSuccess(res.data[0].coronavirus));
//       console.log(res.data[0]);
//     })
//     .catch((err) => {
//       dispatch(getHealthNewsFailure());
//     });

const getAdsRequest = () => ({
    type: GET_HEALTH_NEWS_REQUEST,
  });
  
  const getAdsSuccess = (payload) => ({
    type: GET_HEALTH_NEWS_SUCCESS,
    payload,
  });
  
  const getAdsFailure = () => ({
    type: GET_HEALTH_NEWS_FAILURE,
  });
  
  const getAds = (payload) => (dispatch) => {
    dispatch(getAdsRequest());
    axios
      .get("https://fast-lake-64955.herokuapp.com/Advertisement")
      .then((res) => {
        dispatch(getAdsSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(getAdsFailure());
      });
  

};

export { getHealthNews ,getAds };
