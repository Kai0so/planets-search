import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchAPI from '../services/fetchAPI';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const result = await fetchAPI();
    setData(result);
  };

  useEffect(() => { fetchPlanets(); }, []);

  return (
    <main>
      <PlanetContext.Provider value={ { data } }>
        {children}
      </PlanetContext.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PlanetProvider;
