// Base
import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Material-UI
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionDetailsStyles: {
    borderTop: '1px solid #ffdc7c'
  },
  typographyStyles: {
    fontSize: '0.75rem !important'
  },
  wrFavoritesItem: {
    height: '305px',
    padding: '5px',
    overflowY: 'scroll'
  },
  favoritesItem: {
    margin: '5px 0'
  }
}));

const FavoritesList = ({ selectedArticles }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.wrFavoritesItem}>
      {selectedArticles.map((item, index) => {
        const { title, snippet } = item;

        return (
          <div key={index} className={classes.favoritesItem}>
            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>{ title }</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetailsStyles}>
                <Typography className={classes.typographyStyles}>
                  { snippet }
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ selectedArticles }) => {
  return {
    selectedArticles
  };
};

FavoritesList.propTypes = {
  selectedArticles: PropTypes.array,
}

export default connect(mapStateToProps)(FavoritesList);
