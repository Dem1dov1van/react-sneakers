import React from 'react'

function Header(params) {
    return(
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo-wrap">
                        <a href="/">
                            <img className="header__logo" src="../img/main-logo.png" alt="logo"/>
                            
                            <div className="header__logo-text">
                                <p>React Sneakers</p>
                                <span>Магазин лучших кроссовок</span>
                            </div>
                        </a>
                    </div>
                    <div className="header__user-bar user-bar">
                        <a className="user-bar__basket-link" href="liked-empty.html">
                            <img src="../img/basket.svg" alt="basket"/>
                            <p>1205 руб.</p>
                        </a>
                        <a className="user-bar__liked-link" href="liked-empty.html">
                            <img src="/img/heart.svg" alt="heart"/>
                            <p>
                                <span></span>
                            </p>
                        </a>
                        <a className="user-bar__orders-link" href="order-empty.html">
                            <img src="/img/user.svg" alt="heart"></img>
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