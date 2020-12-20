// Base
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onGetArticle, onLoadingSpinner, onCleanFoundArticles } from '../../reducers/index';

// Material-UI
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchLine = ({ foundArticles, handeleLoadingArticles, onGetArticle, onLoadingSpinner, onCleanFoundArticles }) => {

  // Select item
  const handleGetNameArticle = (e, newValue) => {
    const article = newValue ? foundArticles.find((item) => item.title === newValue) : false;

    if (!!article) {
      // End spinner loading
      onLoadingSpinner();
      onGetArticle(article);
    } else {
      // Start spinner loading
      onLoadingSpinner();
      // Autocomplete cleaning
      onCleanFoundArticles();
    }
  };
  
  return (
    <Autocomplete
      onChange={handleGetNameArticle}
      id="free-solo-demo"
      freeSolo
      options={foundArticles.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          onChange={handeleLoadingArticles}
          {...params}
          label="search articles"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
};

const mapStateToProps = ({ foundArticles }) => {
  return {
    foundArticles
  };
};

const mapDispatchToProps = {
  onGetArticle,
  onLoadingSpinner,
  onCleanFoundArticles
};

SearchLine.propTypes = {
  foundArticles: PropTypes.array,
  handeleLoadingArticles: PropTypes.func,
  onGetArticle: PropTypes.func,
  onLoadingSpinner: PropTypes.func,
  onCleanFoundArticle: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchLine);
