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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useAppState from '../../state/AppStateProvider';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTableSortLabel: {
      root: {
        backgroundColor: '#3f51b5',
        color: '#FFFF',
        fontSize: 16,
        fontWeight: 'bold',
        '&:hover': {
          color: '#FFFF',
          textDecoration: 'underline'
        }
      }
    }
  }
});

function WorldTable() {
  const { setSelectedCountry } = useAppState();
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      'http://localhost:8080/covid19/summaryOfAllCountries'
    );
    const result = await response.json();
    return result;
  });

  const columns = [
    { title: 'Country', field: 'name' },
    {
      title: 'Confirmed',
      field: 'most_recent.confirmed',
      render: (rowData) => rowData.most_recent.confirmed.toLocaleString()
    },
    {
      title: 'Recovered',
      field: 'most_recent.recovered',
      render: (rowData) => rowData.most_recent.recovered.toLocaleString()
    },
    {
      title: 'Deaths',
      field: 'most_recent.deaths',
      render: (rowData) => rowData.most_recent.deaths.toLocaleString()
    },
    {
      title: 'Death Rate',
      field: 'calculated.death_rate',
      render: (rowData) => percentageFormatter(rowData, 'calculated.death_rate')
    }
  ];

  const handleOnRowClick = (event, rowData) => {
    const { name, code } = rowData;
    setSelectedCountry({ name, code });
  };

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        title={'Worldwide COVID-19 Stats'}
        columns={columns}
        data={value}
        options={{
          headerStyle: {
            backgroundColor: '#3f51b5',
            color: '#FFFF',
            fontSize: 16
          },
          search: true,
          pageSize: 200
        }}
        icons={{
          Search: SearchIcon,
          ResetSearch: ClearIcon,
          FirstPage: FirstPageIcon,
          LastPage: LastPageIcon,
          NextPage: ChevronRightIcon,
          PreviousPage: ChevronLeftIcon,
          SortArrow: ArrowUpwardIcon
        }}
        onRowClick={handleOnRowClick}
      />
    </MuiThemeProvider>
  );
}

export { WorldTable };
