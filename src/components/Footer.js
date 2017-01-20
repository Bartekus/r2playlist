import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_SELECTED, SHOW_DESELECTED } from 'constants/Filters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_SELECTED]: 'Selected',
  [SHOW_DESELECTED]: 'Deselected'
};

export default class Footer extends Component {
  static propTypes = {
    selectedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearSelected: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  };

  renderPlaylistCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'playlist' : 'playlists';

    return (
      <span className='playlist-count'>
        <strong>{activeCount || 'No'}</strong> {itemWord} in total
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { selectedCount, onClearSelected } = this.props;
    if (selectedCount > 0) {
      return (
        <button className='clear-selected'
          onClick={onClearSelected}>
          Remove selected
        </button>
      );
    }
  }

  render() {
    return (
      <footer className='footer'>
        {this.renderPlaylistCount()}
        <ul className='filters'>
          {[SHOW_ALL, SHOW_SELECTED, SHOW_DESELECTED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}
