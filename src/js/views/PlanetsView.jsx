import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { CardGrid } from '../component/CardGrid.jsx';

export const PlanetsView = () => {
  const [ planets, setFavorites ] = useState(JSON.parse(localStorage.getItem('planets')));
  const { store, actions } = useContext(Context);
  // console.log(planets);

  const handleLike = (_, id) => {
    const data = planets.filter(planet => planet.uid === id);
    actions.addLike(...data);
    console.log(...data);
    console.log(store.likedElements);

  };


  return (

    <CardGrid endpoint="planets" />

  );
};
