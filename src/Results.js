import React from 'react';
import flatten from 'lodash.flatten';
import uniq from 'lodash.uniq';
import humanize from 'humanize-duration';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    marginLeft: '1.25rem',
  },
});

const Results = ({ text }) => {
  const classes = useStyles();

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
      <Typography className="u-mb-double">
        At average reading speed of {WPM} WPM (words per minute), it would take{' '}
        <span className="u-highlight">
          {humanize(msToRead, {
            round: true,
            conjunction: ' and ',
          })}{' '}
        </span>
        to read this text.
      </Typography>
      <Typography>Top 15 most used words:</Typography>
      <ul className={classes.list}>
        {wordOccurrencesArray.map((word, index) => (
          <li key={index}>
            {word.key}: <span className="u-highlight">{word.value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Results;
