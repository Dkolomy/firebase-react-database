import { useState, useEffect } from "react";
import { findAll_1 } from "../services/countries.mjs";
import CountryListItem from "./CountryListItem";

const CountryList = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await findAll_1();
    setCountries([...res]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <header>
        <h2>Countries</h2>
      </header>

      {loading && <p>loading...</p>}

      <ul>
        {countries.length > 0 &&
          countries.map((country) => {
            <CountryListItem country={country} />;
          })}
      </ul>
    </section>
  );
};

export default CountryList;
