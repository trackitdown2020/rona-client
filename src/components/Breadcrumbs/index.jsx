import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import useAppState from 'state/AppStateProvider';
import Link from '@material-ui/core/Link';
import _ from 'lodash';

function Breadcrumbs() {
  const { selectedCountry, setSelectedCountry } = useAppState();
  const { name } = selectedCountry;

  const handleOnClick = (e) => {
    e.preventDefault();
    setSelectedCountry({});
  };

  if (!_.isEmpty(selectedCountry)) {
    return (
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link color="inherit" onClick={handleOnClick}>
          World
        </Link>
        <Typography color="textPrimary">{name}</Typography>
      </MuiBreadcrumbs>
    );
  }
  return null;
}

export { Breadcrumbs };
