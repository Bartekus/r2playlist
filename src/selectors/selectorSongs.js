// Reselect selector
// Takes a list of songs and song Ids, and picks out
// the selected songs
import _ from 'lodash';
import { createSelector } from 'reselect';

// Create select functions to pick off the pieces of state we care about
// for this calculation
const songsSelector = state => state.songs;
const selectedSelector = state => state.selected;

const getSongs = (songs, selected) => {
  const selectedSongs = _.filter(
    songs,
    song => _.contains(selected, song.id)
  );

  return selectedSongs;
};

export default createSelector(
  songsSelector, // pick off a piece of state
  selectedSelector, // pick off a piece of state
  getSongs // last argument is the function that has our select logic
);
