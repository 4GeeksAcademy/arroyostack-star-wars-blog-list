import React from 'react';
import { ActionsBar } from './ActionsBar.jsx';

const placeholder = 'https://placehold.co/600x400/EEE/31343C';

export const SingleCard = ({ item }) => {
    return (
        <div className="card m-2" style={ { width: "18rem" } }>
            <img
                src={ item.image }
                onError={
                    ({ currentTarget }) => {
                        currentTarget.src = "https://placehold.co/600x400/EEE/31343C";
                    } }
                style={ { width: "18rem" } }
                className="card-img-top"
                alt={ item.name } />
            <div className="card-body">
                <h5 className="card-title">{ item.name }</h5>
            </div>
            <div className="card-body">
                <ActionsBar item={ item } />
            </div>
        </div>
    );
};
