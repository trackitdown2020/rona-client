import React, { useState, useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import { useInterval } from 'react-use'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import { TransitionGroup } from 'react-transition-group';

const getIndex = (index, size) => {
    return (index+1) % size;
}

const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    wrapper: {
      width: 100 + theme.spacing(2),
    },
    paper: {
      zIndex: 1,
      position: 'relative',
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));
  

function AnimatedList(props) {
    const classes = useStyles();
    const {
        data=[],
        RenderList,
        RenderListItem,
        timeout=1000,
        displayNum=3,
        interval=4000
    } = props;

    const [index, setIndex] = useState(displayNum);
    const [displayData, setDisplayData] = useState(data.slice(0, displayNum))

    useInterval(() => {
        const newIndex = getIndex(index, data.length);
        console.log({ newIndex })
        const newDisplayData = [...displayData];
        newDisplayData.shift();
        setDisplayData(newDisplayData);
        newDisplayData.push(data[index]);
        setIndex(newIndex);
    }, interval)
    
    return (
        <RenderList>
            {
                displayData.map((item) => (
                    <Slide direction="up" in={true} mountOnEnter exit={true} unmountOnExit={false} timeout={{enter: timeout, exit: 2000}}>
                        <Paper elevation={4} className={classes.paper}>
                            <RenderListItem {...item}/>
                        </Paper>
                    </Slide>
                ))
            }
        </RenderList>
    )
}

export { AnimatedList };