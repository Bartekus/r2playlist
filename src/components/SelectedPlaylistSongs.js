import React from 'react';
import { connect } from 'react-redux';
import selectorPlaylistSongs from 'selectors/selectorPlaylistSongs';

// console.log('playlist', playlist);

const SelectedPlaylistSongs = (props) => {
  // console.log('SelectedPlaylistSongs-props.playlists', props.playlists);
  // if (props.playlists !== undefined) {
  //   console.log('props-playlists', props.playlists);
  //   // return (
  //   //   <ul className='list-group'>
  //   //     {
  //   //       props.playlists.map(playlist => {
  //   //         <li>
  //   //
  //   //         </li>
  //   //       })
  //   //     }
  //   //   </ul>
  //   // );
  //
  //   return (
  //     <ul className='list-group'>
  //       {
  //         props.playlists.map(playlist => {
  //           console.log('playlist', playlist);
  //           return <li className='list-group-item' key={playlist.id}>{playlist.name}</li>
  //         })
  //       }
  //     </ul>
  //   );
  // } else {
  //   return null;
  // }
  return null;
};

const mapStateToProps = state => {
  return {
    Sets: selectorPlaylistSongs(state)
  };
};

export default connect(mapStateToProps)(SelectedPlaylistSongs);
