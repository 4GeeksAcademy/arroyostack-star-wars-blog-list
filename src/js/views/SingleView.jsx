import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PeopleComponent } from '../component/singleViewComponents/PeopleComponent.jsx';
import { PlanetComponent } from '../component/singleViewComponents/PlanetComponent.jsx';
import { ShipComponent } from '../component/singleViewComponents/ShipComponent.jsx';
import { PlanetsView } from './PlanetsView.jsx';
const avatar = 'https://placehold.co/600x400/EEE/31343C';

export const SingleView = () => {

    const location = useLocation();
    const [ properties, setProperties ] = useState('');
    const [ image, setImage ] = useState('');
    console.log(properties);

    const getPageElement = async () => {
        const res = await fetch(location.state.url);
        const data = await res.json();

        setProperties(data.result.properties);
        setImage(location.state.image);
    };

    useEffect(() => {
        getPageElement();
    }, []);


    return (
        <PlanetComponent properties={ properties } image={ image } />
    );
};
