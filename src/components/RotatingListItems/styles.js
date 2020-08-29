import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      overflow: 'hidden',
      opacity: 1,
      transition: 'all ease-in-out 0.4s'
    },
    tweetList: {
      width: '100%',
    },
}));