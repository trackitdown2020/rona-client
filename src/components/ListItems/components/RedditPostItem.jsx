import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';

// {
//     url: "https://virologyj.biomedcentral.com/articles/10.1186/1743-422X-2-69",
//     title: "Chloroquine is a potent inhibitor of SARS coronavirus infection and spread | Virology Journal",
//     ups: 2,
//     subreddit_name_prefixed: "r/Coronavirus",
//     permalink: "/r/Coronavirus/comments/gmixss/chloroquine_is_a_potent_inhibitor_of_sars/"
// }

function PrimaryText(props) {
  const { title } = props;
  const classes = useStyles();
  return (
    <>
      <Typography
        component="div"
        variant="body1"
        className={classes.inline}
        color="textPrimary"
      >
        <b>{title}</b>
      </Typography>
    </>
  );
}

function SecondaryText(props) {
  const { subreddit_name_prefixed, ups } = props;
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography
          component="span"
          variant="caption"
          className={classes.inline}
          color="textPrimary"
        >
          {subreddit_name_prefixed}
        </Typography>
      </div>
      <div>
        <Typography
          component="span"
          variant="caption"
          className={classes.inline}
          color="textPrimary"
        >
          {ups} upvotes
        </Typography>
      </div>
    </>
  );
}

function RedditPostItem(props) {
  const { title, ups, subreddit_name_prefixed, permalink } = props;

  const handleOnClick = () => {
    window.open(`https://reddit.com${permalink}`);
  };

  return (
    <ListItem alignItems="flex-start" button onClick={handleOnClick}>
      <ListItemText
        primary={<PrimaryText title={title} />}
        secondary={
          <SecondaryText
            ups={ups}
            subreddit_name_prefixed={subreddit_name_prefixed}
          />
        }
      />
    </ListItem>
  );
}

export { RedditPostItem };
