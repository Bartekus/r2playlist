import { combineReducers } from 'redux';
import Library from 'reducers/reducerSongs';
import Sets from 'reducers/reducerPlaylists';
import selected from 'reducers/reducerSelected';

const rootReducer = combineReducers({
  Library: Library,
  Sets: Sets,
  selected: selected
});

export default rootReducer;
