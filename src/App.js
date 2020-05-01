import React, { useState, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Results from './Results';

const useStyles = makeStyles({
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  textareaWrapper: {
    flex: 1,
  },
  textarea: {
    flex: 1,
    background: '#000',
    color: '#627881',
    resize: 'none',
    outline: 'none',
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  results: {
    width: '30rem',
  },
});

const App = () => {
  const [text, setText] = useState('');
  const classes = useStyles();

  const onTextChange = useCallback((e) => setText(e.target.value), []);

  return (
    <div className="u-fx u-fx-column u-full-height">
      <Typography>
        Count characters and words in your text. Find out what are the most
        common words. Measure the time to type and the time to read.
      </Typography>
      <Divider className={`${classes.divider} u-mv-double`} />
      <div className={`${classes.textareaWrapper} u-fx`}>
        <textarea
          className={`${classes.textarea} u-full-height`}
          placeholder="Please enter your text"
          value={text}
          onChange={onTextChange}
        />
        <Divider
          orientation="vertical"
          className={`${classes.divider} u-mh-double`}
        />
        <section className={classes.results}>
          {!text && (
            <Typography>
              Please provide some text to get more statistics about it.
            </Typography>
          )}
          {text && <Results text={text} />}
        </section>
      </div>
    </div>
  );
};

export default App;