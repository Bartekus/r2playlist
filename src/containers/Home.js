import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Main from 'components/Main';
import * as PlaylistActions from 'actions';

const Home = ({ Library, Sets, selected, actions }) => {
  return (
    <div>
      <Header addPlaylist={actions.addPlaylist} />
      <Main Library={Library} Sets={Sets} selected={selected} actions={actions} />
    </div>
  );
};

Home.propTypes = {
  Library: PropTypes.object.isRequired,
  Sets: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  Library: state.Library,
  Sets: state.Sets,
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PlaylistActions, dispatch)
});

Home.defaultProps = {
  Library: {},
  Sets: [],
  selected: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
