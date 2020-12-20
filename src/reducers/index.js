const initialState = {
  foundArticles: [],
  selectArticle: {},
  selectedArticles: [],
  loading: true
};

const ON_LOADING_ARTICLES = 'ON_LOADING_ARTICLES';
const ON_GET_ARTICLE = 'ON_GET_ARTICLE';
const ON_ADD_FAVOURITES = 'ON_ADD_FAVOURITES';
const ON_LOADING_SPINNER = 'ON_LOADING_SPINNER';
const ON_CLEAN_FOUND_ARTICLES = 'ON_CLEAN_FOUND_ARTICLES';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_LOADING_ARTICLES:
      return {
        ...state,
        foundArticles: action.list
      };
    case ON_GET_ARTICLE:
      return {
        ...state,
        selectArticle: action.item
      };
    case ON_ADD_FAVOURITES:
      return {
        ...state,
        selectedArticles: [...state.selectedArticles, state.selectArticle]
      };
    case ON_LOADING_SPINNER:
      return {
        ...state,
        loading: !state.loading
      };
    case ON_CLEAN_FOUND_ARTICLES:
      return {
        ...state,
        foundArticles: []
      };
    default:
      return state;
  }
};

export default reducer;

const onLoadingArticles = (list) => {
  return {
    type: 'ON_LOADING_ARTICLES',
    list
  };
};

const onGetArticle = (item) => {
  return {
    type: 'ON_GET_ARTICLE',
    item
  };
};

const onAddFavourites = () => {
  return {
    type: 'ON_ADD_FAVOURITES'
  };
};

const onLoadingSpinner = () => {
  return {
    type: 'ON_LOADING_SPINNER'
  };
};

const onCleanFoundArticles = () => {
  return {
    type: 'ON_CLEAN_FOUND_ARTICLES'
  };
};

export {
  onLoadingArticles,
  onGetArticle,
  onAddFavourites,
  onLoadingSpinner,
  onCleanFoundArticles
};
