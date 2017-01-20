import { combineReducers } from 'redux';
import songs from 'reducers/reducerSongs';
import playlists from 'reducers/reducerPlaylists';
import selected from 'reducers/reducerSelected';

const rootReducer = combineReducers({
  songs: songs,
  playlists: playlists,
  selected: selected
});

export default rootReducer;
