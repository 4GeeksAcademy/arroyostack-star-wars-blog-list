import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { SingleCard } from './SingleCard.jsx';

export const CardGrid = ({ endpoint }) => {
    const [ topic, setTopic ] = useState(null);
    const { store, actions } = useContext(Context);

    useEffect(() => {

        setTopic(JSON.parse(localStorage.getItem(endpoint)));
    }, []);



    return (
        <ul>
            { topic !== null && topic.map(item => {
                return (

                    <div key={ item.uid } >
                        <SingleCard item={ item } />
                    </div>


                );
            }) }
        </ul>
    );
};
