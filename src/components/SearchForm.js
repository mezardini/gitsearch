// src/components/SearchForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px;
  background-color: #61dafb;
  color: white;
  border: none;
  cursor: pointer;
`;

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      onSearch(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search repositories..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchForm;
