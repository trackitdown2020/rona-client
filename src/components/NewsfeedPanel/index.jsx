import React from 'react';
import { ExpansionPanel } from './ExpansionPanel.jsx';
import {
  ExpansionPanelSummary,
  TwitterExpansionPanelSummary,
  GoogleExpansionSummary,
  RedditExpansionSummary
} from './ExpansionPanelSummary';
import { ExpansionPanelDetails } from './ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

function NewsfeedPanel(props) {
  const classes = useStyles();
  const { panelTitle, children, source } = props;

  let ExpansionPanelSummaryComponent;
  switch (source) {
    case 'google':
      ExpansionPanelSummaryComponent = GoogleExpansionSummary;
      break;
    case 'reddit':
      ExpansionPanelSummaryComponent = RedditExpansionSummary;
      break;
    case 'twitter':
    default:
      ExpansionPanelSummaryComponent = ExpansionPanelSummary;
      break;
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel square expanded={true}>
        <ExpansionPanelSummaryComponent
          aria-controls={`${panelTitle}-content`}
          id={`${panelTitle}-header`}
        >
          <Typography variant={'h6'}>{panelTitle}</Typography>
        </ExpansionPanelSummaryComponent>
        <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export { NewsfeedPanel };
