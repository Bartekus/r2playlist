import _ from 'lodash';
import { SELECT_SONG, DESELECT_SONG, LOAD_FROM_PLAYLIST } from 'constants/Actions';

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_FROM_PLAYLIST:
      return action.payload.songs;
    case SELECT_SONG:
      return [ ...state, action.payload ];
    case DESELECT_SONG:
      return _.without(state, action.payload);
    default:
      return state;
  }
}
