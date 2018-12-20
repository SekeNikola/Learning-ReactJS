import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Playlist from './components/Playlist';
import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube';

import './App.css';


class App extends Component {
  state = { videos: [], selectedVideo: null };

componentDidMount(){
  this.onUserSubmit('buildings')
}

  onUserSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });

    console.log(response.data.items);
  }

  onVideoSelect = (video) => {
    // console.log('From the app',video);
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="container">
        <SearchForm onUserSubmit={this.onUserSubmit} />
        <div className="row">
          <div className="col-8">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-4">
              <Playlist videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
