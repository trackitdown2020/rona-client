import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const getPrimaryColor = (source) => {
  let color;
  switch (source) {
    case 'google':
      color = '#db3236';
      break;
    case 'reddit':
      color = '#FF5700';
      break;
    case 'twitter':
    default:
      color = '#1DA1F2';
      break;
  }
  return color;
};

const createStyles = (source) => ({
  root: {
    backgroundColor: getPrimaryColor(source),
    // color: 'black',
    color: '#FFF',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
});

export const ExpansionPanelSummary = withStyles(createStyles())(
  MuiExpansionPanelSummary
);

export const TwitterExpansionPanelSummary = withStyles(createStyles('twitter'))(
  MuiExpansionPanelSummary
);

export const GoogleExpansionSummary = withStyles(createStyles('google'))(
  MuiExpansionPanelSummary
);

export const RedditExpansionSummary = withStyles(createStyles('reddit'))(
  MuiExpansionPanelSummary
);
