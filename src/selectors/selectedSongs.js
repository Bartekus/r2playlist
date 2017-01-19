// Reselect selector
// Takes a list of posts and post Ids, and picks out
// the selected Posts
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
// for this calculation
const songsSelector = state => state.songs;
const selectedSongsSelector = state => state.selectedSongIds;

const getSongs = (songs, selectedSongIds) => {
  const selectedSongs = _.filter(songs,
    (song) => _.contains(selectedSongIds, song)
  );

  return selectedSongs;
};

export default createSelector(
  songsSelector, // pick off a piece of state
  selectedSongsSelector, // pick off a piece of state
  getSongs // last argument is the function that has our select logic
);
