import React, { useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useAppState from '../../state/AppStateProvider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const defaultColumns = [
  {
    title: 'Country',
    field: 'country'
  },
  {
    title: 'Cases',
    field: 'cases',
    render: (rowData) => rowData.cases.toLocaleString()
  },
  {
    title: 'Recovered',
    field: 'recovered',
    render: (rowData) => rowData.recovered.toLocaleString()
  },
  {
    title: 'Deaths',
    field: 'deaths',
    render: (rowData) => rowData.deaths.toLocaleString()
  }
];

const perOneMillionColumns = [
  {
    title: 'Country',
    field: 'country'
  },
  {
    title: 'Cases Per One Million',
    field: 'casesPerOneMillion',
    render: (rowData) => rowData.casesPerOneMillion.toLocaleString()
  },
  {
    title: 'Recovered Per One Million',
    field: 'recoveredPerOneMillion',
    render: (rowData) => rowData.recoveredPerOneMillion.toLocaleString()
  },
  {
    title: 'Deaths Per One Million',
    field: 'deathsPerOneMillion',
    render: (rowData) => rowData.deathsPerOneMillion.toLocaleString()
  }
];

function WorldTable() {
  const { selectedCountry, setSelectedCountry } = useAppState();
  const [perOneMillion, setPerOneMillion] = useState(false);
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/covid19/summaryOfAllCountries`
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const handleRowClick = (event, rowData) => {
    const {
      country,
      countryInfo: { iso3 }
    } = rowData;
    setSelectedCountry({ name: country, code: iso3 });
  };

  const handleChange = (event) => {
    setPerOneMillion(!perOneMillion);
  };

  return (
    <MaterialTable
      title={'Worldwide COVID-19 Stats'}
      columns={perOneMillion ? perOneMillionColumns : defaultColumns}
      data={value}
      options={{
        headerStyle: {
          backgroundColor: '#3f51b5',
          color: '#FFFF'
        },
        search: true,
        pageSize: 10
      }}
      components={{
        Toolbar: (props) => (
          <div>
            <MTableToolbar {...props} />
            <div style={{ padding: '0px 10px' }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={perOneMillion}
                    onChange={handleChange}
                    name="perOneMillion"
                    color="primary"
                  />
                }
                label="Per One Million"
              />
            </div>
          </div>
        )
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
      onRowClick={handleRowClick}
    />
  );
}

export { WorldTable };
