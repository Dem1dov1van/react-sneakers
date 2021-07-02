import React from 'react'
import mainLogo from '../img/main-logo.png'
import basket from '../img/basket.svg'
import heart from '../img/heart.svg'
import user from '../img/user.svg'


function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo-wrap">
                        <a href="/">
                            <img className="header__logo" src={mainLogo} alt="logo"/>
                            
                            <div className="header__logo-text">
                                <p>React Sneakers</p>
                                <span>Магазин лучших кроссовок</span>
                            </div>
                        </a>
                    </div>
                    <div className="header__user-bar user-bar">
                        <a className="user-bar__basket-link">
                            <img src={basket} alt="basket"/>
                            <p>1205 руб.</p>
                        </a>
                        <a className="user-bar__liked-link" href="liked-empty.html">
                            <img src={heart} alt="heart"/>
                            <p>
                                <span></span>
                            </p>
                        </a>
                        <a className="user-bar__orders-link" href="order-empty.html">
                            <img src={user} alt="user"/>
                            <p>
                                <span></span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;