import store from './store';
import { fetchLibrary, fetchSets } from 'actions';

export function onHomeEnter() {
  store.dispatch(fetchLibrary());
}

export function onMainEnter() {
  store.dispatch(fetchSets());
}
