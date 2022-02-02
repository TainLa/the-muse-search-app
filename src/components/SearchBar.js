import React, { createContext } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 48px;
  width: 360px;
  background:#f2f2f2;
  justify-content: space-between;
  // padding-left: 5px;
  border-radius: none;
  transition: all .3s ease;
  // margin-right: 1.25rem;
  // margin-left: 10.25rem;
  // // top:20px;
`;

const StyledInput = styled.input`
  // padding-left: 48px;
  border:none;
  // background-color: transparent;
  width: 100%;
  height:100%;
  position: absolute;
  top:0;
  left: 0;
  font-size: 18px;
  outline: none;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  // padding:10px;

  &:focus {
    border-color: rgba(0 ,0, 0.3);
  }
`;
export const AppContext = createContext();

const SearchBar = () => {
  return (
    <SearchWrapper>
    <StyledInput
      // type="text"
      placeholder="Search Job Title"
    >
      </StyledInput>
      </SearchWrapper>

  );
}
export default SearchBar;