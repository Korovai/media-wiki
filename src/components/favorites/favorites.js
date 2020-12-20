// Base
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Material-Ui
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

// Components
import StubFavorites from '../helpers/stub-favorites';
import FavoritesList from '../favorites-list/favorites-list';

// Styles
import './favorites.css';

const Favorites = ({ selectedArticles }) => {
  return (
    <div className="wrFavorites">
      <div className="favoritesTitle">
        <BookmarkBorderIcon />
        Selected Articles
      </div>    
      {
        selectedArticles.length === 0
          ? <StubFavorites />
          : <FavoritesList />
      }
    </div>
  );
};

const mapStateToProps = ({ selectedArticles }) => {
  return {
    selectedArticles
  };
};

Favorites.propTypes = {
  selectedArticles: PropTypes.array,
}

export default connect(mapStateToProps)(Favorites);
