import React from 'react';

import { CardGrid } from '../component/CardGrid.jsx';

export const VehicleView = () => {
  return (
    <>
      <div className="vehicle-background" style={ { marginTop: '100px' } }>
        <h2 className="mt-5 mb-5 text-center">StarWars Vehicles</h2>
        <CardGrid endpoint="vehicles" />
      </div>
    </>

  );
};