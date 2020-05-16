import React from 'react';

import TransitionsExample from '../AnimatedListItems';

export default { title: 'Animated List' };

const test = new Array(10).fill(0).map((_, index) => { return { title: index } });

const TestListItem = (props) => {
    return  (
        <ListItem>
            <ListItemText>
                {props.title}
            </ListItemText>
        </ListItem>
    )

}
  

export const TransitionsTestExample = () => (
    // <AnimatedList data={test} displayItems={3} RenderList={List} RenderListItem={TestListItem} />
    <TransitionsExample/>
)