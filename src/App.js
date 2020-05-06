import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from './Header';
import Divider from './Divider';
import Content from './Content';
import Footer from './Footer';
import { SMALL_BP, LARGE_BP } from './Constants';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;

  @media screen and (max-width: ${SMALL_BP}) {
    padding: 1rem;
  }
`;

const App = () => {
  const [text, setText] = useState('');
  const [statisticsOnly, setStatisticsOnly] = useState(false);
  const underBreakpoint = useMediaQuery(`(max-width: ${LARGE_BP})`);

  const onTextChange = useCallback((e) => setText(e.target.value), []);

  const onClickSeeStatistics = useCallback(() => setStatisticsOnly(true), []);

  const onClickSeeText = useCallback(() => setStatisticsOnly(false), []);

  useEffect(() => {
    if (!underBreakpoint && statisticsOnly) {
      setStatisticsOnly(false);
    }
  }, [underBreakpoint, statisticsOnly]);

  return (
    <StyledWrapper>
      <Header
        onClickSeeText={onClickSeeText}
        onClickSeeStatistics={onClickSeeStatistics}
        underBreakpoint={underBreakpoint}
        statisticsOnly={statisticsOnly}
      />
      <Divider />
      <Content
        text={text}
        onTextChange={onTextChange}
        underBreakpoint={underBreakpoint}
        statisticsOnly={statisticsOnly}
      />
      <Divider />
      <Footer />
    </StyledWrapper>
  );
};

export default App;
