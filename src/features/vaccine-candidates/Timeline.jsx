import React from 'react';
import { useAsync } from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    width: 300
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}));

function VaccineTimeline() {
  const classes = useStyles();
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      'http://localhost:8080/covid19/vaccine/trials'
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  return (
    <Timeline align="alternate">
      {Object.entries(value).map(([key, value]) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body1" color="textSecondary">
                Phase {key}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <Icon style={{ fontSize: 30 }}>{key}</Icon>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <List className={classes.trialResearchContainer} dense>
                  {value.map((trial) => {
                    console.log(trial);
                    return (
                      <>
                        <ListItem>
                          <ListItemText
                            primary={
                              trial.tradeName && trial.tradeName.join(', ')
                            }
                          />
                        </ListItem>
                        <Divider />
                      </>
                    );
                  })}
                </List>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

export { VaccineTimeline };
