import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import SearchResults from './SearchResults';

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const SearchWrapper = styled.div`
  margin: 1em 0;
  position: relative;
  align-items: center;
  height: 48px;
  margin-top: 1em;
  margin-right: 0.5em;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  outline: none;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 4px;

  &:focus {
    border-color: rgba(0, 0, 0.3);
  }
`;

export const AppContext = createContext();

const SearchPage = () => {
  const [inputText, setInputText] = useState('');
  const [jobResults, setJobResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const url = 'data.json';
    fetch(url).then(async (response) => {
      try {
        const data = await response.json();
        setJobResults(data.results);
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  const searchItems = (searchValue) => {
    setInputText(searchValue);
    if (inputText !== '') {
      const filteredData = jobResults.filter((item) => {
        return item.name.toLowerCase().includes(inputText.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(jobResults);
    }
  };

  return (
    <Wrapper>
      <AppContext.Provider
        value={{
          results: filteredResults.length === 0 ? jobResults : filteredResults,
          setInputText: setInputText,
        }}
      >
        <SearchWrapper>
          <StyledInput
            placeholder='Search Job Title'
            onChange={(e) => searchItems(e.target.value)}
          ></StyledInput>
        </SearchWrapper>
        <SearchResults />
      </AppContext.Provider>
    </Wrapper>
  );
};
export default SearchPage;
