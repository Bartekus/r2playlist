import { browserHistory } from 'react-router';
import axios from 'axios';
import {
  FETCH_SONGS,
  FETCH_SONG,

  SELECT_SONG,
  DESELECT_SONG,

  FETCH_PLAYLISTS,
  FETCH_PLAYLIST,

  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  EDIT_PLAYLIST,

  SELECT_PLAYLIST,
  COMPLETE_ALL,
  CLEAR_SELECTED,

  CREATE_ERROR,
  CLEAR_ERROR
} from 'constants/Actions';

const ROOT_URL = 'http://localhost:5000';

export const clearError = () => {
  return { type: CLEAR_ERROR };
};

/*
 *
 * Library
 *
 */
export function fetchSongs() {
  const request = axios.get(`${ROOT_URL}/library`);

  return {
    type: FETCH_SONGS,
    payload: request
  };
}

export function fetchSong(id) {
  const request = axios.get(`${ROOT_URL}/library/${id}`);

  return {
    type: FETCH_SONG,
    payload: request
  };
}

export function selectSong(id) {
  return {
    type: SELECT_SONG,
    payload: id
  };
}

export function deselectSong(id) {
  return {
    type: DESELECT_SONG,
    payload: id
  };
}

/*
 *
 * Playlist
 *
 */
export const selectPlaylist = id => ({
  type: SELECT_PLAYLIST,
  id
});

export const completeAll = () => ({ type: COMPLETE_ALL });

export const clearSelected = () => ({ type: CLEAR_SELECTED });

export function fetchLists() {
  const request = axios.get(`${ROOT_URL}/playlist`);

  return {
    type: FETCH_PLAYLISTS,
    payload: request
  };
}

export function fetchList(id) {
  const request = axios.get(`${ROOT_URL}/playlist/${id}`);

  return {
    type: FETCH_PLAYLIST,
    payload: request
  };
}

export const addPlaylist = props => dispatch => {
  let name = props;
  let songs = [];

  axios.post(`${ROOT_URL}/playlist`, { name, songs })
  .then(() => {
    dispatch({
      type: ADD_PLAYLIST,
      name
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};

export const deletePlaylist = (id) => dispatch => {
  let playlistID = id;

  axios.delete(`${ROOT_URL}/playlist/${id}`)
  .then(() => {
    dispatch({
      type: DELETE_PLAYLIST,
      id: playlistID
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};

export const editPlaylist = (props) => dispatch => {
  let editedPlaylist = props;
  axios.post(`${ROOT_URL}/playlist/${props.id}`, props)
  .then(() => {
    dispatch({
      type: EDIT_PLAYLIST,
      id: editedPlaylist.id,
      name: editedPlaylist.name,
      songs: editedPlaylist.songs
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};
