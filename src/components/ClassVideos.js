import React from 'react';

function ClassVideos({ selectedClass, playVideo }) {
  const handlePlayVideo = (videoSrc) => {
    // Scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For a smooth scroll effect
    });

    // Trigger the video playback
    playVideo(videoSrc);
  };

  const formatVideoTitle = (title) => {
    return title
      .split('_') // Split title by '_'
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join words with space
  };

  const formatClassName = (className) => {
    return className
      .split('-') // Split className by '-'
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join words with space
  };

  return (
    <div className="class-videos-container">
      <h2>{formatClassName(selectedClass.className)}</h2>
      <div className="videos-scroll-container">
        {selectedClass.videos.map((video, index) => (
          <div key={index} className="video-item">
            <img src={video.thumbnail.url} alt={video.title} className="thumbnail" />
            <h4 className="video-title">{formatVideoTitle(video.title)}</h4>
            <p className="video-duration">Duration: {Math.floor(video.durations_in_ms / 60000)} minutes</p>
            <div>
              {video.links.map((link, idx) => (
                <button key={idx} onClick={() => handlePlayVideo(link.src)}>
                  Play {link.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassVideos;
