import React from 'react';
import { NewsfeedPanel } from './index';
import { TwitterItem } from '../ListItems/components/TwitterItem';
import { GoogleNewsItem } from '../ListItems/components/GoogleNewsItem';
import { ListItems } from '../ListItems';
import { mockGoogleData, mockTwitterData } from '../../mocks';
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