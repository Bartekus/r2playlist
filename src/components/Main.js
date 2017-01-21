import React, { Component, PropTypes } from 'react';
import Playlist from './Playlist';
import Songs from 'components/Songs';
import Selected from 'components/Selected';
import Footer from './Footer';

import { SHOW_ALL, SHOW_SELECTED, SHOW_DESELECTED } from 'constants/Filters';

const PLAYLIST_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_DESELECTED]: playlist => !playlist.selected,
  [SHOW_SELECTED]: playlist => playlist.selected
};

export default class Main extends Component {
  static propTypes = {
    Library: PropTypes.object,
    Sets: PropTypes.array,
    selected: PropTypes.array,
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
    const { Library, Sets, actions } = this.props;
    // playlists.map((playlist) => playlist.songs.map((song, index) => console.log(song)));
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
    const { Sets, actions } = this.props;
    if (Sets.length > 0) {
      return (
        <input className='toggle-all'
          type='checkbox'
          checked={selectedCount === Sets.length}
          onChange={actions.completeAll} />
      );
    }
  }

  renderFooter(selectedCount) {
    const { Sets } = this.props;
    const { filter } = this.state;
    const activeCount = Sets.length - selectedCount;

    if (Sets.length) {
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
    const { Library, Sets, actions } = this.props;
    const { filter } = this.state;

    const filteredPlaylists = Sets.filter(PLAYLIST_FILTERS[filter]);
    const selectedCount = Sets.reduce((count, playlist) =>
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
