import * as actionTypes from '../actions/actionTypes';
import {fetchArticles} from '../actions/articles';
import { updateObject } from '../actions/utility';





export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES:
      return action.payload.data;
    case actionTypes.UNFETCH_ARTICLES:
      return [];
  }

  return state;
}
