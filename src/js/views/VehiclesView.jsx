import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { CardGrid } from '../component/CardGrid.jsx';

export const VehicleView = () => {
  const [ vehicles, setVehicle ] = useState(null);
  const { store, actions } = useContext(Context);

  const handleLike = (_, id) => {
    const data = vehicles.filter(vehicle => vehicle.uid === id);
    actions.addLike(...data);
    console.log(...data);
    console.log(store.likedElements);

  };

  useEffect(() => {
    setVehicle(JSON.parse(localStorage.getItem('vehicles')));
  }, []);

  return (
    <CardGrid endpoint="vehicles" />
  );
};