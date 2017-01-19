import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import PlaylistTextInput from './PlaylistTextInput';

export default class PlaylistItem extends Component {
  static propTypes = {
    playlist: PropTypes.object.isRequired,
    editPlaylist: PropTypes.func.isRequired,
    deletePlaylist: PropTypes.func.isRequired,
    selectPlaylist: PropTypes.func.isRequired
  };

  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, name, songs) => {
    if (name.length === 0) {
      this.props.deletePlaylist(id);
    } else {
      this.props.editPlaylist(id, name, songs);
    }
    this.setState({ editing: false });
  };

  render() {
    const { playlist, selectPlaylist, deletePlaylist } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <PlaylistTextInput name={playlist.name} songs={[]}
          editing={this.state.editing}
          onSave={(name, songs) => this.handleSave(playlist.id, name, songs)} />
      );
    } else {
      element = (
        <div className='view'>
          <input className='toggle'
            type='checkbox'
            checked={playlist.selected}
            onChange={() => selectPlaylist(playlist.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {playlist.name}
          </label>
          <button className='destroy'
            onClick={() => deletePlaylist(playlist.id)} />
        </div>
      );
    }

    return (
      <li className={classnames({
        selected: playlist.selected,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}
