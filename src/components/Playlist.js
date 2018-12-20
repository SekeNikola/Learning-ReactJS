import React from 'react';
import VideoItem from './VideoItem';

const Playlist = ({videos, onVideoSelect}) =>{
  const renderedList =   videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
    })
    return(
        <div>
            {renderedList}
        </div>
    )
}

export default Playlist;