import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const ActionsBar = ({ item }) => {
    const { store, actions } = useContext(Context);
    const [ liked, setLiked ] = useState(false);

    const handleLike = () => {
        actions.addLike(item);
        setLiked(!liked);
    };



    return (
        <>
            <div>
                <Link to="/single" state={ item } className="btn  bg-danger text-white"><i className="bi bi-file-earmark-minus-fill" />More details...</Link>


                <button onClick={ handleLike } type="button" name="" id="" className={ `btn btn-primary  ${ liked === true ? 'bg-warning text-black' : 'bg-primary text-warning' }` }>
                    {
                        store.likedElements.some(element => element.uid === item.uid) ? 'Unlike' : 'Like'
                    }
                </button>
            </div>
        </>
    );
};
