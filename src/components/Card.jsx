import React from 'react'

import dislike from '../img/no-like.svg'



function Card({ name, price, imageSrc, onAddClick }) {

    return(
        <li className="sneakers__item">
            <div className="sneakers__item-wrap">
                <div className="sneakers__like-btn">
                    <img  src={dislike} alt="dislike"/>
                </div>
                <img className="sneakers__img" src={imageSrc} alt="sneakers"/>
                <p className="sneakers__name">
                    {name}
                </p>
                <div className="sneakers__price">
                    <p>Цена</p>
                    <b>{price} руб.</b>
                </div>
                <div className="sneakers__add-btn" onClick={()=>onAddClick(name)}>
                </div>
            </div>
        </li>
    );
}

export default Card;
