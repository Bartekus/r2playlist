import React from 'react';
import { connect } from 'react-redux';
import selectedSongs from 'selectors/selectorSongs';

const Selected = (props) => {
  return (
    <ul className='list-group'>
      {
        props.Library.map(song => {
          return <li className='list-group-item' key={song.id}>{song.title}</li>
        })
      }
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    Library: selectedSongs(state)
  };
};

export default connect(mapStateToProps)(Selected);
