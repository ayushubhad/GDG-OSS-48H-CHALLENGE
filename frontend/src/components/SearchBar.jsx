import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <Search size={20} className="search-icon" />
      <input
        type="text"
        placeholder="Search events, categories, or speakers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
