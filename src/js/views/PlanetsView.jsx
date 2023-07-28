import React from 'react';
import { CardGrid } from '../component/CardGrid.jsx';

export const PlanetsView = () => {

  return (
    <>
      <div className="planet-background bg-dark" style={ { marginTop: '100px' } } >
        <h2 className="mt-5 mb-5 text-center">StarWars Planets</h2>
        <CardGrid endpoint="planets" />
      </div>
    </>

  );
};
