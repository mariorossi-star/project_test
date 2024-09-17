import React, { useState } from 'react';
import ClassList from './components/ClassList';
import ClassVideos from './components/ClassVideos';
import VideoPlayer from './components/VideoPlayer';
import SearchBar from './components/SearchBar';
import { classData } from './data/classData'; // Import your class data

function App() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [filteredClasses, setFilteredClasses] = useState(classData);
  const [videoUrl, setVideoUrl] = useState('');

  const selectClass = (yogaClass) => {
    setSelectedClass(yogaClass);
  };

  const playVideo = (url) => {
    setVideoUrl(url);
  };

  const handleSearch = (term) => {
    if (term) {
      const filtered = classData.filter((yogaClass) =>
        yogaClass.className.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredClasses(filtered);
    } else {
      setFilteredClasses(classData);
    }
  };

  const handleTitleClick = () => {
    window.location.reload(); // Refresh the page when the title is clicked
  };

  return (
    <div className='App'>
      <div className="app-title-bar">
        <h1 className="app-title" onClick={handleTitleClick}>
          <span className="bold-title">Potato</span><span className="normal-title">Exercises</span>
        </h1>
      </div>
      <div className="content">
        <div className="search-bar-container">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
        <VideoPlayer videoUrl={videoUrl} />
        {selectedClass && (
            <ClassVideos selectedClass={selectedClass} playVideo={playVideo} />
          )}
          </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ClassList classes={filteredClasses} selectClass={selectClass} playVideo={playVideo} />
          
        </div>
      </div>
    </div>
  );
}

export default App;
