import store from './store';
import { fetchSongs, fetchLists } from './actions';

export function onLibraryEnter() {
  store.dispatch(fetchSongs());
}

export function onPlaylistEnter() {
  store.dispatch(fetchLists());
}
