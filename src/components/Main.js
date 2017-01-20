import React, { Component, PropTypes } from 'react';
import Playlist from './Playlist';
import Songs from 'components/Songs';
import Selected from 'components/Selected';
import Footer from './Footer';

// import * as stores from '../store';

import { SHOW_ALL, SHOW_SELECTED, SHOW_DESELECTED } from '../constants/Filters';

const PLAYLIST_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_DESELECTED]: playlist => !playlist.selected,
  [SHOW_SELECTED]: playlist => playlist.selected
};

export default class Main extends Component {
  static propTypes = {
    songs: PropTypes.object,
    playlists: PropTypes.array,
    actions: PropTypes.object
  };

  state = { filter: SHOW_ALL };

  handleClearSelected = () => {
    this.props.actions.clearSelected();
  };

  handleShow = filter => {
    this.setState({ filter });
  };

  renderLibrary() {
    const { songs, actions } = this.props;

    return (
      <div>
        <h4>Selected Songs</h4>
        <Selected />
        <hr />
        <h4>All Songs</h4>
        <Songs />
      </div>
    );
  }

  renderToggleAll(selectedCount) {
    const { playlists, actions } = this.props;
    if (playlists.length > 0) {
      return (
        <input className='toggle-all'
          type='checkbox'
          checked={selectedCount === playlists.length}
          onChange={actions.completeAll} />
      );
    }
  }

  renderFooter(selectedCount) {
    const { playlists } = this.props;
    const { filter } = this.state;
    const activeCount = playlists.length - selectedCount;

    if (playlists.length) {
      return (
        <div>
          <Footer selectedCount={selectedCount}
            activeCount={activeCount}
            filter={filter}
            onClearSelected={this.handleClearSelected.bind(this)}
            onShow={this.handleShow.bind(this)} />
          <br />
          <br />
          <br />
        </div>
      );
    }
  }

  render() {
    const { songs, playlists, actions } = this.props;
    const { filter } = this.state;

    const filteredPlaylists = playlists.filter(PLAYLIST_FILTERS[filter]);
    const selectedCount = playlists.reduce((count, playlist) =>
        playlist.selected ? count + 1 : count,
      0
    );

    return (
      <section className='main'>
        {this.renderToggleAll(selectedCount)}
        <ul className='playlist'>
          {filteredPlaylists.map(playlist =>
            <Playlist key={playlist.id} playlist={playlist} {...actions} />
          )}
        </ul>
        {/*{this.renderFooter(selectedCount)}*/}
        {this.renderLibrary()}
      </section>
    );
  }
}
