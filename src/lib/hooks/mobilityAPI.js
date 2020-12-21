import { useEffect, useState } from 'react';

export const useFetchMobility = (country='US', state, type) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchMobility = async () => {
        setLoading(true);
        try {
            const url = new URL(`${process.env.REACT_APP_BASE_URL}/covid19/mobility`);
            url.searchParams.append('country', country);
            if(state) {
                url.searchParams.append('state', state);
            }
            if(type) {
                const typeQueryParams = type.length > 0 ? type.join(",") : 'all';
                url.searchParams.append('type', typeQueryParams)
            }
            const res = await fetch(url.toString())
            const json = await res.json();
            setResponse(json);
            setLoading(false);
        } catch(error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchMobility()
    }, [country, state, type]);

    return {
        response,
        error,
        loading
    };
}

