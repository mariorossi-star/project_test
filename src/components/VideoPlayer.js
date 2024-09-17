import React from 'react';
import '../App.css';

function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      {videoUrl ? (
        <video className="video-element" controls width="600" src={videoUrl}></video>
      ) : (
        <p className="no-video-message">
          
        </p>
      )}
    </div>
  );
}

export default VideoPlayer;

