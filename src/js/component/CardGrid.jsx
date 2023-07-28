import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { SingleCard } from './SingleCard.jsx';

export const CardGrid = ({ endpoint }) => {
    const [ topic, setTopic ] = useState(null);
    const { store, actions } = useContext(Context);
    console.log(topic);
    useEffect(() => {

        setTopic(JSON.parse(localStorage.getItem(endpoint)));
    }, []);



    return (
        <>
            <h1 className="m-5 text-start p-2" >{ endpoint.toUpperCase() }</h1>
            <ul className="d-flex flex-wrap justify-content-around">

                { topic !== null && topic.map(item => {
                    return (

                        <div key={ item.uid } >
                            <SingleCard item={ item } />
                        </div>


                    );
                }) }
            </ul>
        </>
    );
};
