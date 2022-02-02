import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #3e3f40;
  box-sizing: border-box;
  position: relative;
`;

const JobDetail = styled.div`
  color: #767676;
  font-size: 1rem;
  min-height: 2rem;
  overflow: hidden;
`;

const JobLocation = styled.div`
  margin-top: 0.625rem;
`;

const JobTitle = styled.div`
  margin: 0 0 1.25rem;
  font-weight: bold;
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
`;
const JobName = styled.div`
  font: 12px;
  position: absolute;
  color: white;
  bottom: 0;
`;

const ResultCard = ({ name, company, locations, contents }) => {
  return (
    <>
      <CardWrapper>
        <JobTitle>{name}</JobTitle>
        <JobName>{company.name}</JobName>
        <JobLocation>{locations.name}</JobLocation>
        <JobDetail>{contents}</JobDetail>
      </CardWrapper>
    </>
  );
};

export default ResultCard;
