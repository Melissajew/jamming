import React from 'react';

import './App.css';
import SearchBar from '../searchBar/SearchBar';
import SearchResults from '../searchResults/SearchResults';
import Playlist from '../playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.state = {
      searchResults: ['name', 'artist', 'album', 'id'],
      playlistName: "New Playlist",
      playlistTracks: []
    }
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      let newPlaylistTracks = this.state.playlistTracks.concat(track);
      this.setState({playlistTracks: newPlaylistTracks});
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          //Add a SearchBar component
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>
            <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
