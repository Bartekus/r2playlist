import store from './store';
import { fetchSongs, fetchLists } from './actions';

export function onHomeEnter() {
  store.dispatch(fetchSongs());
}

export function onMainEnter() {
  store.dispatch(fetchLists());
}
