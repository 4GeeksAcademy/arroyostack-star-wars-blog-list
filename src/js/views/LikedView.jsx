import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { CardGrid } from '../component/CardGrid.jsx';

export const LikedView = () => {
    const { store, actions } = useContext(Context);
    const [ liked, setLiked ] = useState(null);
    const { likedElements } = store;
    console.log(liked);

    useEffect(() => {

        setLiked(JSON.parse(localStorage.getItem('likedElements')));

    }, [ likedElements ]);


    return (
        <>
            <div>likedItems</div>
            <ul>
                <CardGrid endpoint="likedElements" />
            </ul>
        </>
    );
};
