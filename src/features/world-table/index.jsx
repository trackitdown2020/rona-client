import React from 'react';
import MaterialTable from 'material-table';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import { percentageFormatter } from './formatters';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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
            title={'Worldwide COVID-19 Stats'}
            columns={columns}
            data={value}
            options={{
                headerStyle: {
                    backgroundColor: '#3f51b5',
                    color: '#FFFF'
                },
                search: true,
                pageSize: 10
            }}
            icons={{
                Search: SearchIcon,
                ResetSearch: ClearIcon,
                FirstPage: FirstPageIcon,
                LastPage: LastPageIcon,
                NextPage: ChevronRightIcon,
                PreviousPage: ChevronLeftIcon
            }}
        />
    )

}

export { WorldTable };
