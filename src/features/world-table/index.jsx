import React from 'react';
import MaterialTable from 'material-table';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import { percentageFormatter } from './formatters';

function WorldTable() {
    const { value, error, loading } = useAsync(async () => {
        const response = await fetch('http://localhost:8080/covid19/summaryOfAllCountries');
        const result = await response.json();
        return result;
    });

    const columns = [
        { title: 'Country', field: 'name' },
        { title: 'Confirmed', field: 'most_recent.confirmed' },
        { title: 'Recovered', field: 'most_recent.recovered' },
        { title: 'Deaths', field: 'most_recent.deaths' },
        { title: 'Death Rate', field: 'calculated.death_rate', render: rowData => percentageFormatter(rowData, 'calculated.death_rate') }
    ];

    if(loading || !value) {
        return <LoadingSpinner/>
    }

    return (
        <MaterialTable
            title={'Worldwide Covid-19 Stats'}
            columns={columns}
            data={value}
        />
    )

}

export { WorldTable };

// {
//     "coordinates": {
//         "latitude": 33,
//         "longitude": 65
//     },
//     "name": "Afghanistan",
//     "code": "AF",
//     "population": 29121286,
//     "updated_at": "2020-06-04T06:27:27.328Z",
//     "today": {
//         "deaths": 5,
//         "confirmed": 624
//     },
//     "most_recent": {
//         "deaths": 299,
//         "confirmed": 17891,
//         "recovered": 1541,
//         "critical": 16051
//     },
//     "calculated": {
//         "death_rate": 1.6712313453691798,
//         "recovery_rate": 8.613269241518081,
//         "recovered_vs_death_ratio": null,
//         "cases_per_million_population": 19
//     }
// }