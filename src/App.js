import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
