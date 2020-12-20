// Base
import React from 'react';

// Styles
import boxPic from './box.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrPicBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    userSelect: 'none',
    textAlign: 'center',
    '& img': {
      width: '50px'
    }
  },
  stubText: {
    marginTop: '15px',
    fontWeight: 'bold',
    color: '#3f51b5'
  }
}));

const StubFavorites = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrPicBox}>
      <img src={boxPic} alt='add folder' />
      <div className={classes.stubText}>No featured articles</div>
    </div>
  );
};

export default StubFavorites;
