import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainHeader from 'components/MainHeader';
import Main from 'components/Main';
import * as PlaylistActions from 'actions';

const Home = ({ songs, playlists, actions }) => {
  return (
    <div>
      <MainHeader addPlaylist={actions.addPlaylist} />
      <Main songs={songs} playlists={playlists} actions={actions} />
    </div>
  );
};

Home.propTypes = {
  songs: PropTypes.object.isRequired,
  playlists: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  songs: state.songs,
  playlists: state.playlists
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PlaylistActions, dispatch)
});

Home.defaultProps = {
  songs: {},
  playlists: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);