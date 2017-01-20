// Reselect selector
// Takes a list of songs and song Ids, and picks out
// the selected songs
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
// for this calculation
const songsSelector = state => state.songs;
const playlistSongSelector = state => state.playlists;
const selectedSelector = state => state.selected;

const getSongs = (songs, playlists, selected) => {
  const selectedSongs = _.filter(
    songs,
    song => _.contains(selected, song.id)
  );
  // console.log('selectedSongs', selectedSongs);

  // if (playlists) {
  //   const selectedPlaylistSongs = playlists.map((playlist) => playlist.songs.filter((song, index) => _.contains(selected, song)));
  //   console.log('selectedPlaylistSongs', selectedPlaylistSongs);
  // }

  return selectedSongs;
};

export default createSelector(
  songsSelector, // pick off a piece of state
  playlistSongSelector, // pick off a piece of state
  selectedSelector, // pick off a piece of state
  getSongs // last argument is the function that has our select logic
);
