import React, { PropTypes, Component } from 'react';
import PlaylistTextInput from './PlaylistTextInput';

export default class Header extends Component {
  static propTypes = {
    addPlaylist: PropTypes.func.isRequired
  };

  handleSave = name => {
    if (name.length !== 0) {
      this.props.addPlaylist(name);
    }
  };

  render() {
    return (
      <header className='header'>
        <h1>Playlist Challenge</h1>
        <PlaylistTextInput newPlaylist
          onSave={this.handleSave}
          placeholder='Create new playlist?' />
      </header>
    );
  }
}
