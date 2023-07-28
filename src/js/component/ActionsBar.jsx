import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const ActionsBar = ({ item }) => {
    const { store, actions } = useContext(Context);
    console.log(actions.addLike);

    const handleLike = () => {
        actions.addLike(item);
        console.log(store);
    };
    return (
        <>
            <div>
                <Link to="/single" state={ item } className="btn  bg-danger"><i className="bi bi-file-earmark-minus-fill" />More details...</Link>

                {/* <button type="button" className="btn  bg-danger"><i className="bi bi-file-earmark-minus-fill"></i>More</button> */ }

                <button onClick={ handleLike } ><i className="bi bi-check-square "></i>Like</button>
            </div>
        </>
    );
};
