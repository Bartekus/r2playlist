import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class PlaylistTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newPlaylist: PropTypes.bool
  };

  state = {
    name: this.props.name || ''
  };

  handleSubmit = e => {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(name);
      if (this.props.newPlaylist) {
        this.setState({ name: '' });
      }
    }
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleBlur = e => {
    if (!this.props.newPlaylist) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-playlist': this.props.newPlaylist
        })}
        type='name'
        placeholder={this.props.placeholder}
        autoFocus='true'
        value={this.state.name}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    );
  }
}
