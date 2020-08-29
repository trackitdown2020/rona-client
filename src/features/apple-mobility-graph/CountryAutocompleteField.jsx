import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

function CountryAutocompleteField(props) {
  const { country, onChange } = props;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        'http://localhost:8080/covid19/mobility/apple/supportedCountries'
      );
      const countries = await response.json();

      if (active) {
        setOptions(countries);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

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
    onChange(newValue);
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      getOptionSelect={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      onChange={handleOnChange}
      value={country}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country"
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

export { CountryAutocompleteField };
