import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for classes or videos..."
      value={searchTerm}
      onChange={handleSearch}
      className="search-bar"
    />
  );
}

export default SearchBar;
