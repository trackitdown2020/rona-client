import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 16,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = forwardRef((props, ref) => {
  const { value } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div ref={ref}>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                { value }
                </Typography>
            </CardContent>
        </Card>
    </div>
  
  );
})

export { SimpleCard };

// export default forwardRef((props, ref) => <Si))


// const FunctionalArticle = forwardRef((props, ref) => (
//   <div ref={ref}>
//     {props.articleName}
//   </div>
// ));