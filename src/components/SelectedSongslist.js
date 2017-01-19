import React from 'react';
import { connect } from 'react-redux';
import selectedSongs from 'selectors/selectedSongs';

const SelectedSongslist = (props) => {
  return (
    <ul className='list-group'>
      {
        props.songs.map(song => {
          console.log('props.songs', this.props);
          return <li className='list-group-item' key={song}>{song.title}</li>
        })
      }
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    songs: selectedSongs(state)
  };
};

export default connect(mapStateToProps)(SelectedSongslist);
