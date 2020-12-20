// Base
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { onLoadingArticles, onCleanFoundArticles } from '../../reducers/index';

// Services
import MediaWikiService from '../../services/media-wiki-service';

// Components
import SearchArticles from '../search-articles/search-articles';
import Favorites from '../favorites/favorites';

// Styles
import './app.css';

const App = ({ onLoadingArticles, onCleanFoundArticles }) => {
  const mediaWikiService = new MediaWikiService();

  // Loading articles
  const handeleLoadingArticles = (e) => {
    if (!!e.target.value) {
      const search = (e.target.value);

      mediaWikiService
        .getArticles(search).then((articles) => {
          onLoadingArticles(articles);
        }).catch(onError);
    } else onCleanFoundArticles();
  };

  // Data loading error
  const onError = (e) => {
    console.log('Error loading data!');
  };

  return (
    <div className="wrApp">
      <div className="appTitle">MediaWiki</div>
      <div className="wrColumn">
        <SearchArticles handeleLoadingArticles={handeleLoadingArticles} />
        <Favorites />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  onLoadingArticles,
  onCleanFoundArticles
};

App.propTypes = {
  onLoadingArticles: PropTypes.func,
  onCleanFoundArticles: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
