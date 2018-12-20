import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="card mb-5" onClick={() =>{onVideoSelect(video)}}>
            <img className="card-img-top" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="card-body">
                <div className="card-title">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem