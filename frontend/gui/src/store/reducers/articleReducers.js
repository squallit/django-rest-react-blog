import * as actionTypes from '../actions/actionTypes';
import {fetchArticles} from '../actions/articleActions';
import { updateObject } from '../actions/utility';





export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES:
      //reverse the array of data, so the lastest article will appear first
      return action.payload.data.reverse();
    case actionTypes.UNFETCH_ARTICLES:
      return [];
  }

  return state;
}
