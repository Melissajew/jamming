import React from 'react';

import './App.css';
import SearchBar from '../searchBar/SearchBar';
import SearchResults from '../searchResults/SearchResults';
import Playlist from '../playlist/Playlist';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          //Add a SearchBar component
          <div className="App-playlist">
            //Add a SearchResults component
            //Add a Playlist component
          </div>
        </div>
      </div>
    );
  }
}

export default App;
