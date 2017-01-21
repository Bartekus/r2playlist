import axios from 'axios';
import {
  FETCH_LIBRARY,
  FETCH_SONG,
  SELECT_SONG,
  DESELECT_SONG,
  FETCH_SETS,
  FETCH_PLAYLIST,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  EDIT_PLAYLIST,
  SELECT_PLAYLIST,
  LOAD_FROM_PLAYLIST,
  COMPLETE_ALL,
  CLEAR_SELECTED,
  CREATE_ERROR,
  CLEAR_ERROR
} from 'constants/Actions';

const ROOT_URL = 'http://localhost:5000';

/*
 *
 * General Functions and Modifiers
 *
 */
export const clearError = () => ({ type: CLEAR_ERROR });
export const selectSong = (id) => ({ type: SELECT_SONG, payload: id });
export const deselectSong = (id) => ({ type: DESELECT_SONG, payload: id });
export const clearSelected = () => ({ type: CLEAR_SELECTED });
export const completeAll = () => ({ type: COMPLETE_ALL });

// export const selectPlaylist = (id) => ({ type: SELECT_PLAYLIST, payload: id });
export const selectPlaylist = (id) => dispatch => {
  axios.get(`${ROOT_URL}/playlist/${id}`).then((playlist) => {
    dispatch({
      type: LOAD_FROM_PLAYLIST,
      payload: playlist.data
    });
    dispatch({
      type: SELECT_PLAYLIST,
      payload: id
    });

  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};

/*
 *
 * GET Library
 *
 */
export const fetchLibrary = () => dispatch => {
  axios.get(`${ROOT_URL}/library`).then((Library) => {
    dispatch({
      type: FETCH_LIBRARY,
      payload: Library
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};

/*
 *
 * GET Song by song.id
 *
 */
export const fetchSong = (id) => dispatch => {
  axios.get(`${ROOT_URL}/library/${id}`).then((song) => {
    dispatch({
      type: FETCH_SONG,
      payload: song
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};

/*
 *
 * GET Playlist Sets
 *
 */
export const fetchSets = () => dispatch => {
  axios.get(`${ROOT_URL}/playlist`)
  .then((Sets) => {
    dispatch({
      type: FETCH_SETS,
      payload: Sets
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};

/*
 *
 * GET Playlist by (id)
 *
 */
export const fetchPlaylist = (id) => dispatch => {
  axios.get(`${ROOT_URL}/playlist/${id}`)
  .then((playlist) => {
    dispatch({
      type: FETCH_PLAYLIST,
      payload: playlist
  });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_ERROR,
      payload: error
    });
  });
};

/*
 *
 * POST Playlist with (props)
 *
 */
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

/*
 *
 * DELETE Playlist by (id)
 *
 */
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

/*
 *
 * POST Playlist by (id) with (props)
 *
 */
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
