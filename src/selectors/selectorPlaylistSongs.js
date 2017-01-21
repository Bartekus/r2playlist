// Reselect selector
// Takes a list of songs and song Ids, and picks out
// the selected songs
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
// for this calculation
const playlistSongSelector = state => state.Sets;
const selectedSelector = state => state.selected;

const getPlaylistSongs = (Sets, selected) => {
  // const selectedSongs = _.filter(
  //   songs,
  //   song => _.contains(selected, song.id)
  // );
  //
  // if (Sets.length > 0) {
  //   const selectedPlaylistSongs = Sets.map((playlist) => playlist.songs.filter((song, index) => _.contains(selected, song)));
  //   console.log('selectedPlaylistSongs', selectedPlaylistSongs);
  //   return selectedPlaylistSongs;
  // }
  //
  // return selectedSongs;
};

export default createSelector(
  // songsSelector, // pick off a piece of state
  playlistSongSelector, // pick off a piece of state
  selectedSelector, // pick off a piece of state
  getPlaylistSongs // last argument is the function that has our select logic
);
