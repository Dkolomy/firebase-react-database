import React from "react";

const CountryListItem = (props) => {
  const { country } = props;

  return (
    <li key={country.id}>
      <h3>
        {country.flag} {country.name} ({country.code})
      </h3>
      <p>Capital: {country.capital}</p>
      <p>Continent: {country.continent}</p>
    </li>
  );
};

export default CountryListItem;
