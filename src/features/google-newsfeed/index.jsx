import React from 'react';
import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { NewsfeedPanel } from '../../components/NewsfeedPanel';
import { ListItems } from '../../components/ListItems';
import { GoogleNewsItem } from '../../components/ListItems/components'



function GoogleNewsfeed() {
    const { value, error, loading } = useAsync(async () => {
        const response = await fetch('http://localhost:8080/google/everything?q=coronavirus+covid-19')
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
        return <ListItems items={value} ItemComponent={GoogleNewsItem}/>
    }

    return (
        <NewsfeedPanel panelTitle={"Top Headlines"}>
            { renderBody() }
        </NewsfeedPanel>
    );
}

export { GoogleNewsfeed }