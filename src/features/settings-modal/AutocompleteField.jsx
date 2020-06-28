import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  selectedCountry,
  setSelectedCountry
} from '../../state/AppStateProvider';

function AutocompleteField() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('http://localhost:3000/country/all');
      const countries = await response.json();

      if (active) {
        setOptions(countries);
      }
    })();

    return () => {
      active = false;
    };
  })();

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleOnOpen = () => {
    setOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e, newValue) => {
    setSelectedCountry(newValue);
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      getOptionSelect={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={handleOnChange}
      value={selectedCountry}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}

export { AutocompleteField };
