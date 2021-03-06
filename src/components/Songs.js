import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Songs extends Component {

  handleSongSelect({ id }, event) {
    const { selectSong, deselectSong } = this.props;
    event.target.checked ? selectSong(id) : deselectSong(id);
  }

  renderSong(song) {
    return (
      <li className='list-group-item justify-content-between' key={song.id}>
        <input
          value={_.includes(this.props.selected, song.id)}
          type='checkbox'
          onChange={this.handleSongSelect.bind(this, song)}
        />
        <h4 className='list-group-item-heading'>
          {song.title}
        </h4>
        <p className='list-group-item-text'>
          {song.artist}
        </p>
        <span className='badge badge-default badge-pill'>{song.duration}</span>
      </li>
    );
  }

  render() {
    return (
      <ul className='list-group'>
        {_.map(this.props.Library, this.renderSong.bind(this))}
      </ul>
    );
  }
}

export default connect(({Library, selected}) => ({Library, selected}) , actions)(Songs);
