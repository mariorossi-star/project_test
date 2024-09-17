import React, { useEffect, useState } from 'react';
import '../App.css'; // Ensure the correct path to your App.css

function ClassList({ classes, selectClass, playVideo }) {
  const [availableClasses, setAvailableClasses] = useState([]);
  const [randomClasses, setRandomClasses] = useState([]);

  const handleSelectClass = (yogaClass) => {
    // Scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For a smooth scroll effect
    });

    selectClass(yogaClass);

    // Automatically play the first video of the class
    const firstVideoSrc = yogaClass.videos[0]?.links[0]?.src;
    if (firstVideoSrc) {
      playVideo(firstVideoSrc);
    }
  };

  const formatClassName = (className) => {
    return className
      .split('-') // Split className by '-'
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join words with space
  };

  // Filter classes based on accessible thumbnails
  useEffect(() => {
    const filterClasses = async () => {
      const filteredClasses = [];

      for (let yogaClass of classes) {
        const thumbnailUrl = yogaClass.videos[0]?.thumbnail?.url;

        if (thumbnailUrl) {
          filteredClasses.push(yogaClass);
        }
      }

      setAvailableClasses(filteredClasses);
    };

    filterClasses();
  }, [classes]);

  // Select 50 random classes from available classes once they are filtered
  useEffect(() => {
    if (availableClasses.length > 0) {
      const shuffledClasses = availableClasses.sort(() => 0.5 - Math.random());
      const selectedClasses = shuffledClasses.slice(0, 54); 
      setRandomClasses(selectedClasses);
    }
  }, [availableClasses]);

  return (
    <div className="class-grid-container">
      {randomClasses.map((yogaClass, index) => {
        const thumbnailUrl = yogaClass.videos[0].thumbnail.url;
        return (
          <div
            key={index}
            className="class-grid-item"
            onClick={() => handleSelectClass(yogaClass)}
          >
            <div
              className="class-thumbnail"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            ></div>
            <div className="class-title">
              <h3>{formatClassName(yogaClass.className)}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ClassList;
