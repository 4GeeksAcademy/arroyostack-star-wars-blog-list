import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { CardGrid } from '../component/CardGrid.jsx';

export const PeopleViews = () => {
  const [ people, setpeople ] = useState(JSON.parse(localStorage.getItem('people')));
  const { store, actions } = useContext(Context);

  const handleLike = (_, id) => {
    const data = people.filter(person => person.uid === id);
    actions.addLike(...data);
    console.log(...data);
    console.log(store.likedElements);

  };
  return (

    <CardGrid endpoint="people" />

  );
};
