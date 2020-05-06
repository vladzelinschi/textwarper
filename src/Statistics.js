import React from 'react';
import styled from 'styled-components';
import flatten from 'lodash.flatten';
import uniq from 'lodash.uniq';
import humanize from 'humanize-duration';
import Typography from '@material-ui/core/Typography';
import { SMALL_BP, HIGHLIGHT_TEXT__COLOR } from './Constants';

const StyledTypography = styled(Typography)`
  &.MuiTypography-root {
    margin-bottom: 2rem;

    @media screen and (max-width: ${SMALL_BP}) {
      margin-bottom: 1rem;
    }
  }
`;

const StyledSpan = styled.span`
  color: ${HIGHLIGHT_TEXT__COLOR};
`;

const StyledList = styled.ul`
  margin-left: 1.25rem;
`;

const Statistics = ({ text }) => {
  const allChars = text.length;
  const allCharsExcludingWhitespace = text.replace(/\s/g, '').length;
  const allWordsArray = flatten(
    text.match(/[\w\d’'-]+/gi).map((word) => {
      if (word[0] === "'") {
        word = word.slice(1);
      }

      if (word[word.length - 1] === "'") {
        word = word.slice(0, word.length - 1);
      }

      if (word.indexOf('_') > -1) {
        word = word.split('_').filter((w) => w !== '');
      }

      return word;
    })
  );
  const allWords = allWordsArray.length;
  const allWordsChars = allWordsArray.join('').length;
  const uniqueWords = uniq(allWordsArray).length;
  const averageWordLength = (allWordsChars / allWords).toFixed(1);

  const CPM = 200;
  const WPM = 250;
  const msToType = (allChars / CPM) * 60 * 1000;
  const msToRead = (allWords / WPM) * 60 * 1000;

  const wordOccurrences = {};

  allWordsArray.forEach((word) => {
    if (wordOccurrences[word]) {
      ++wordOccurrences[word];
    } else {
      wordOccurrences[word] = 1;
    }
  });

  const wordOccurrencesArray = Object.keys(wordOccurrences)
    .map((key) => ({
      key,
      value: wordOccurrences[key],
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 15);

  return (
    <>
      <Typography>
        Characters with whitespace: <StyledSpan>{allChars}</StyledSpan>
      </Typography>
      <Typography>
        Characters excluding whitespace:{' '}
        <StyledSpan>{allCharsExcludingWhitespace}</StyledSpan>
      </Typography>
      <Typography>
        All words: <StyledSpan>{allWords}</StyledSpan>
      </Typography>
      <Typography>
        Unique words: <StyledSpan>{uniqueWords}</StyledSpan>
      </Typography>
      <StyledTypography>
        Average word length: <StyledSpan>{averageWordLength}</StyledSpan>
      </StyledTypography>
      <StyledTypography>
        At average typing speed of {CPM} CPM (characters per minute), it would
        take{' '}
        <StyledSpan>
          {humanize(msToType, {
            round: true,
            conjunction: ' and ',
          })}{' '}
        </StyledSpan>
        to type this text.
      </StyledTypography>
      <StyledTypography>
        At average reading speed of {WPM} WPM (words per minute), it would take{' '}
        <StyledSpan>
          {humanize(msToRead, {
            round: true,
            conjunction: ' and ',
          })}{' '}
        </StyledSpan>
        to read this text.
      </StyledTypography>
      <Typography>Top 15 most used words:</Typography>
      <StyledList>
        {wordOccurrencesArray.map((word, index) => (
          <li key={index}>
            {word.key}: <StyledSpan>{word.value}</StyledSpan>
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default Statistics;
