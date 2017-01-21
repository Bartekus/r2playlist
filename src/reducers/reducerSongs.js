import _ from 'lodash';
import {
  FETCH_LIBRARY
} from 'constants/Actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LIBRARY:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
