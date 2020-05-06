import React from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import StatisticsWrapper from './StatisticsWrapper';
import { HIGHLIGHT_TEXT__COLOR } from './Constants';

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const StyledTextarea = styled.textarea`
  flex: 1;
  height: 100%;
  background: #000;
  color: ${HIGHLIGHT_TEXT__COLOR};
  resize: none;
  outline: none;
  font-size: 1rem;
  line-height: 1.5;
`;

const Content = ({ text, onTextChange, underBreakpoint, statisticsOnly }) => (
  <StyledWrapper>
    {!statisticsOnly && (
      <>
        <StyledTextarea
          placeholder="Enter your text"
          value={text}
          onChange={onTextChange}
        />
        {!underBreakpoint && <Divider orientation="vertical" />}
        {!underBreakpoint && (
          <StatisticsWrapper text={text} statisticsOnly={statisticsOnly} />
        )}
      </>
    )}
    {statisticsOnly && (
      <StatisticsWrapper text={text} statisticsOnly={statisticsOnly} />
    )}
  </StyledWrapper>
);

export default Content;
