import React from 'react';
import { connect } from 'react-redux';
import selectedSongs from 'selectors/selectorSongs';

const Selected = (props) => {
  return (
    <ul className='list-group'>
      {
        props.songs.map(song => {
          return <li className='list-group-item' key={song.id}>{song.title}</li>
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

export default connect(mapStateToProps)(Selected);
