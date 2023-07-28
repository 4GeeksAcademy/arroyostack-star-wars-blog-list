import React from 'react';

import { CardGrid } from '../component/CardGrid.jsx';

export const PeopleViews = () => {

  return (
    <>
      <div className="people-background" style={ { marginTop: '100px' } }>
        <h2 className="home-subtitle mt-5 mb-5 text-center">StarWars Characters</h2>
        <CardGrid endpoint="people" />
      </div>
    </>

  );
};
