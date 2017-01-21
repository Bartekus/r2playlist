import store from './store';
import { fetchLibrary, fetchSets, preSelectPlaylist } from 'actions';

export function onHomeEnter() {
  store.dispatch(fetchLibrary());
}

export function onMainEnter() {
  store.dispatch(fetchSets());
}

export function onInitalLoad() {
  store.dispatch(preSelectPlaylist());
}
