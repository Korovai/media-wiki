// Base
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Material-UI
import SearchIcon from '@material-ui/icons/Search';

// Components
import SearchLine from '../search-line/search-line';
import SelectArticle from '../select-article/select-article';
import Spinner from '../spinner/spinner';

// Styles
import './search-articles.css';

const SearchArticles = ({ loading, handeleLoadingArticles }) => { 
  return (
    <div className="wrSearchArticles">
      <div className="searchArticleTitle">
        <SearchIcon />
        Search article
      </div>
      <SearchLine handeleLoadingArticles={handeleLoadingArticles} />
      {
        loading  ? <Spinner /> : <SelectArticle />
      }
    </div>
  );
};

const mapStateToProps = ({ loading }) => {
  return {
    loading
  };
};

SearchArticles.propTypes = {
  loading: PropTypes.bool,
  handeleLoadingArticles: PropTypes.func
}

export default connect(mapStateToProps)(SearchArticles);
