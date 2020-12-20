// Base
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onAddFavourites } from '../../reducers/index';

// Material-UI
import Button from '@material-ui/core/Button';

// Styles
import './select-article.css';

const SelectArticle = ({ selectArticle, onAddFavourites }) => {
  const { title, wordcount, snippet } = selectArticle;

  return (
    <div className="wrSelectArticle">
      <div className="selectArticle">
        <div className="titleArticle">{ title }</div>
        <div className="wordCountArticle">word count: { wordcount }</div>
        <div className="snippetArticle">{ snippet }</div>
        <Button
          onClick={onAddFavourites}
          className="saveBtn"
          variant="contained"
          color="primary"
          disableElevation
        >
          Save
        </Button> 
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectArticle }) => {
  return {
    selectArticle
  };
};

const mapDispatchToProps = {
  onAddFavourites
};

SelectArticle.propTypes = {
  selectArticle: PropTypes.object,
  onAddFavourites: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectArticle);
