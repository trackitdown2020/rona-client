import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { AnimatedList } from './index';

export default { title: 'Animated List' };

const data = new Array(10).fill(null).map((_, index) => { return { index } });

const ListItemExample = (props) => {
    console.log(props)
    return (
        <ListItem>
            <ListItemText primary={props.index}/>
        </ListItem>
    )
}

export const AnimatedListExample = () => (
    <AnimatedList data={data} RenderList={List} RenderListItem={ListItemExample}/>
)