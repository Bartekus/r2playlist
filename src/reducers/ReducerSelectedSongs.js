import _ from 'lodash';
import {
  SELECT_SONG,
  DESELECT_SONG
} from '../constants/ActionTypes';

const INITIAL_STATE = { allSelected: [], song: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_SONG:
      return [ ...state, action.payload ];
    case DESELECT_SONG:
      return _.without(state, action.payload);
    default:
      return state;
  }
}
