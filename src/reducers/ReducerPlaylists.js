import {
  FETCH_PLAYLISTS,
  FETCH_PLAYLIST,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  EDIT_PLAYLIST,
  SELECT_PLAYLIST,
  COMPLETE_ALL,
  CLEAR_SELECTED
} from '../constants/ActionTypes';

const initialState = [];

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      return action.payload.data;

    case FETCH_PLAYLIST:
      return {
        ...state,
        playlist: action.payload.data
      };

    case ADD_PLAYLIST:
      return [
        {
          id: state.reduce((maxId, playlist) => Math.max(playlist.id, maxId), -1) + 1,
          selected: false,
          name: action.name
        },
        ...state
      ];

    case DELETE_PLAYLIST:
      return state.filter(playlist =>
        playlist.id !== action.id
      );

    case EDIT_PLAYLIST:
      return state.map(playlist =>
        playlist.id === action.id ? { ...playlist, name: action.name } : playlist
      );

    case SELECT_PLAYLIST:
      return state.map(playlist =>
        playlist.id === action.id ? { ...playlist, selected: !playlist.selected } : playlist
      );

    case COMPLETE_ALL:
      const areAllMarked = state.every(playlist => playlist.selected);
      return state.map(playlist => ({
        ...playlist,
        selected: !areAllMarked
      }));

    case CLEAR_SELECTED:
      return state.filter(playlist => playlist.selected === false);

    default:
      return state;
  }
}
