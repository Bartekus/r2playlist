import _ from 'lodash';
import {
  FETCH_SONGS,
  FETCH_SONG,
  FIND_SONG
} from '../constants/ActionTypes';

const INITIAL_STATE = { count: 0, all: [], song: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SONG:
      return { ...state, song: action.payload.data };
    case FETCH_SONGS:
      return { ...state, all: action.payload.data, count: action.payload.data.length };
    case FIND_SONG:
      return _.extend({}, state, { song: action.payload });
    default:
      return state;
  }
}
