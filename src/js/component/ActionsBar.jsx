import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const ActionsBar = ({ item }) => {
    const { store, actions } = useContext(Context);
    const [ likeOption, setLikeOption ] = useState('');
    const [ liked, setLiked ] = useState(false);

    const handleLike = () => {
        actions.addLike(item);
        setLiked(!liked);
    };

    useEffect(() => {

    }, [ likeOption ]);

    return (
        <>
            <div>
                <Link to="/single" state={ item } className="btn  bg-danger text-white"><i className="bi bi-file-earmark-minus-fill" />More details...</Link>

                {/* <button type="button" className="btn  bg-danger"><i className="bi bi-file-earmark-minus-fill"></i>More</button> */ }
                <button onClick={ handleLike } type="button" name="" id="" className={ `btn btn-primary  ${ liked === true ? 'bg-warning text-black' : 'bg-primary text-warning' }` }>
                    {
                        store.likedElements.some(element => element.uid === item.uid) ? 'Unlike' : 'Like'
                    }
                </button>

                <button className="btn" onClick={ handleLike } ><i className="bi bi-check-square "></i>Like</button>


            </div>
        </>
    );
};
