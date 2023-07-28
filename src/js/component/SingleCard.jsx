import React from 'react';
import { ActionsBar } from './ActionsBar.jsx';

const placeholder = 'https://res.cloudinary.com/teepublic/image/private/s--IoqhreWR--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1260,x_-138,y_-76/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-138,y_-76/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1539384919/production/designs/3309274_0.jpg';

export const SingleCard = ({ item }) => {
    return (
        <div className="card-opacity card m-2" style={ { width: "18rem" } }>
            <img
                src={ item.image }
                onError={
                    ({ currentTarget }) => {
                        currentTarget.src = placeholder;
                    } }
                style={ { width: "18rem", minHeight: "18rem" } }
                className="card-img-top"
                alt={ item.name } />
            <div className="card-body">
                <h5 className="card-title text-warning">{ item.name }</h5>
            </div>
            <div>
                <ActionsBar item={ item } />
            </div>
        </div>
    );
};
