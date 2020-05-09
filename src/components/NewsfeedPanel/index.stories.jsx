import React from 'react';
import { NewsfeedPanel } from './index';

export default { title: 'Newsfeed Panel' };

export const NewsfeedPanelWithTwitterItem = () => (
    <NewsfeedPanel panelTitle={'Twitter'}>
        <ListItems items={mockTwitterData} ItemComponent={TwitterItem}/>
    </NewsfeedPanel>
);

export const NewsfeedPanelWithGoogleItem = () => (
    <NewsfeedPanel panelTitle={'News'}>
        <ListItems items={mockGoogleData} ItemComponent={GoogleNewsItem}/>
    </NewsfeedPanel>
);