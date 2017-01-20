import _ from 'lodash';
import {
  FETCH_SONGS
} from '../constants/Actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
