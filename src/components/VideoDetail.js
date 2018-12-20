import React from 'react';

const VideoDetial = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="card">
            <div className="card-body">
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title={video.snippet.title} className="embed-responsive-item" src={videoSrc} frameBorder="0"></iframe>
            </div>
                <div className="card-title">
                    <h4>{video.snippet.title}</h4> 
                </div>
                <div className="card-text">
                    {video.snippet.description}
                </div>
            </div>
        </div>
    )
}

export default VideoDetial