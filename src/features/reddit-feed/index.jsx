import React from 'react';
import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { ListItems } from '../../components/ListItems';
import { RedditPostItem } from '../../components/ListItems/components';

function RedditFeed() {
    const { value, error, loading } = useAsync(async () => {
        const response = await fetch('http://localhost:8080/reddit/subredditHot?subreddits=coronavirus,covid19&limit=5');
        const result = await response.json();
        return result;
    });

    const renderBody = () => {
        if(loading || !value) {
            return <LoadingSpinner/>
        }

        if(error) {
            console.log(error);
        }

        return <ListItems items={value} ItemComponent={RedditPostItem}/>
    }

    return (
        <NewsfeedPanel panelTitle={"Reddit Hot Posts"} source={"reddit"}>
            { renderBody() }
        </NewsfeedPanel>
    );
}

export { RedditFeed };