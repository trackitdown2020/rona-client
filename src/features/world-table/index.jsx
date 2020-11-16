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

function WorldTable() {
  const { setSelectedCountry } = useAppState();
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      'http://localhost:8080/covid19/summary/country'
    );
    const result = await response.json();
    return result;
  });

  const columns = [
    {
      title: 'Country',
      field: 'country'
    },
    {
      title: 'Cases',
      field: 'cases'
    },
    {
      title: 'Recovered',
      field: 'recovered'
    },
    {
      title: 'Deaths',
      field: 'deaths'
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
        PreviousPage: ChevronLeftIcon,
        SortArrow: ArrowUpwardIcon
      }}
      onRowClick={handleOnRowClick}
    />
  );
}

export { WorldTable };
