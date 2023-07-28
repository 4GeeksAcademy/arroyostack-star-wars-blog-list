import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PlanetComponent } from '../component/singleViewComponents/PlanetComponent.jsx';


export const SingleView = () => {

    const location = useLocation();
    const [ properties, setProperties ] = useState('');
    const [ image, setImage ] = useState('');


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
