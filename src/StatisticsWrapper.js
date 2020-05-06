import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Statistics = lazy(() => import('./Statistics'));

const StyledWrapper = styled.div`
  overflow-y: scroll;
  width: ${(props) => (props.statisticsOnly ? '100%' : '30rem')};
`;

const StatisticsWrapper = ({ text, ...rest }) => (
  <StyledWrapper {...rest}>
    {!text && (
      <Typography>
        Provide some text to get more statistics about it.
      </Typography>
    )}
    {text && (
      <Suspense fallback={null}>
        <Statistics text={text} />
      </Suspense>
    )}
  </StyledWrapper>
);

export default StatisticsWrapper;
