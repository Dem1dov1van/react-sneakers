import React from 'react'

function Card({ name, price, imageSrc }) {
    return(
        <li className="sneakers__item">
            <div className="sneakers__item-wrap">
                <div className="sneakers__like-btn">
                    <img  src="/img/no-like.svg" alt="no-love"></img>
                </div>
                <img className="sneakers__img" src={imageSrc} alt="nike"></img>
                <p className="sneakers__name">
                    {name}
                </p>
                <div className="sneakers__price">
                    <p>Цена</p>
                    <b>{price} руб.</b>
                </div>
                <div className="sneakers__add-btn">
                </div>
            </div>
        </li>
    );
}

export default Card;
