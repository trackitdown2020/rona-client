import React from 'react';
import { useAsync } from 'react-use';
import { StatsDisplayCard } from '../../components/StatsDisplayCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import countries from 'i18n-iso-countries';

function StatsCards({ code }) {
  const { value, loading, error } = useAsync(async () => {
    const isoCode = countries.alpha2ToAlpha3(code);
    const response = await fetch(
      `http://localhost:8080/covid19/countryReport?iso=${isoCode}`
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const { confirmed, recovered, deaths } = value;
  return (
    <>
      <StatsDisplayCard title={'TOTAL CONFIRMED'} value={confirmed} />
      <StatsDisplayCard title={'TOTAL DEATHS'} value={deaths} />
      <StatsDisplayCard title={'TOTAL RECOVERED'} value={recovered} />
    </>
  );
}

export { StatsCards };
