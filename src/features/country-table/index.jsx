import React from 'react';
import useAppState from '../../state/AppStateProvider';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MaterialTable from 'material-table';
import countries from 'i18n-iso-countries';

const columns = [
  { title: 'Province', field: 'region.province' },
  { title: 'Confirmed', field: 'confirmed' },
  { title: 'Deaths', field: 'deaths' },
  { title: 'Recovered', field: 'recovered' }
];

function CountryTable() {
  const { selectedCountry } = useAppState();
  const { name, code } = selectedCountry;

  const { value, loading } = useAsync(async () => {
    const isoCode = countries.alpha2ToAlpha3(code);
    const response = await fetch(
      `http://localhost:8080/covid19/countryProvinceReport?iso=${isoCode}`
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const { data } = value;

  return (
    <MaterialTable
      title={`${name} Provinces`}
      columns={columns}
      data={data}
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
    />
  );
}

export { CountryTable };
