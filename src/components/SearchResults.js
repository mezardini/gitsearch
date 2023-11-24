// src/components/SearchResults.js
import React from 'react';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  margin-top: 20px;
`;

const ResultList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ResultItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const SearchResults = ({ results }) => {
  return (
    <ResultsContainer>
      <h2>Search Results</h2>
      <ResultList>
        {results.map((result) => (
          <ResultItem key={result.id}>{result.name}</ResultItem>
        ))}
      </ResultList>
    </ResultsContainer>
  );
};

export default SearchResults;
