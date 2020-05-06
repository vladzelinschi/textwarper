import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from './Button';

const Header = ({
  onClickSeeText,
  onClickSeeStatistics,
  underBreakpoint,
  statisticsOnly,
}) => (
  <header>
    <Typography>
      Count characters and words in your text. Find out what are the most common
      words. Measure the time to type and the time to read.
    </Typography>
    {underBreakpoint && (
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => {
          if (statisticsOnly) {
            onClickSeeText();
          } else {
            onClickSeeStatistics();
          }
        }}
      >
        {statisticsOnly ? 'See text' : 'See statistics'}
      </Button>
    )}
  </header>
);

export default Header;
