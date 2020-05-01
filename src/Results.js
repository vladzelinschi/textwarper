import React from 'react';
import uniq from 'lodash.uniq';
import humanize from 'humanize-duration';
import Typography from '@material-ui/core/Typography';

const Results = ({ text }) => {
  const allChars = text.length;
  const allCharsExcludingWhitespace = text.replace(/\s/g, '').length;
  const allWordsArray = text.match(/\b(\w+)\b/g);
  const allWords = allWordsArray.length;
  const allWordsChars = allWordsArray.join('').length;
  const uniqueWords = uniq(allWordsArray).length;
  const averageWordLength = (allWordsChars / allWords).toFixed(1);

  const CPM = 200;
  const WPM = 250;

  const msToType = (allChars / CPM) * 60 * 1000;
  const msToRead = (allWords / WPM) * 60 * 1000;

  return (
    <>
      <Typography>
        Characters with whitespace:{' '}
        <span className="u-highlight">{allChars}</span>
      </Typography>
      <Typography>
        Characters excluding whitespace:{' '}
        <span className="u-highlight">{allCharsExcludingWhitespace}</span>
      </Typography>
      <Typography>
        All words: <span className="u-highlight">{allWords}</span>
      </Typography>
      <Typography>
        Unique words: <span className="u-highlight">{uniqueWords}</span>
      </Typography>
      <Typography className="u-mb-double">
        Average word length:{' '}
        <span className="u-highlight">{averageWordLength}</span>
      </Typography>
      <Typography className="u-mb-double">
        At average typing speed of {CPM} CPM (characters per minute), it would
        take{' '}
        <span className="u-highlight">
          {humanize(msToType, {
            round: true,
            conjunction: ' and ',
          })}{' '}
        </span>
        to type this text.
      </Typography>
      <Typography>
        At average reading speed of {WPM} WPM (words per minute), it would take{' '}
        <span className="u-highlight">
          {humanize(msToRead, {
            round: true,
            conjunction: ' and ',
          })}{' '}
        </span>
        to read this text.
      </Typography>
    </>
  );
};

export default Results;
