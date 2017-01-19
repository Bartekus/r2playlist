import { combineReducers } from 'redux';
import songs from 'reducers/ReducerSongs';
import playlists from 'reducers/ReducerPlaylists';
import selectedSongIds from 'reducers/ReducerSelectedSongs';

const rootReducer = combineReducers({
  songs: songs,
  playlists: playlists,
  selectedSongs: selectedSongIds
});

export default rootReducer;
