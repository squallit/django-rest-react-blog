import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchArticles =  () => {
  return async dispatch => {

    const response = await axios.get('http://127.0.0.1:8000/api/');

    dispatch({
      type: actionTypes.FETCH_ARTICLES,
      payload: response
    })
  }
}



export const unfetchArticles = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.UNFETCH_ARTICLES
    })
  }
}
