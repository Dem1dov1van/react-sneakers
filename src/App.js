// import logo from './logo.svg';
import './App.css';

import Card from './components/Card'
import Header from './components/Header';

const sneakersArr = [
    {
        name : 'Мужские Кроссовки Nike Blazer Mid Suede', 
        price: 12990,
        imgSrc: './img/1.jpg'
    },
    {
        name : 'Мужские Кроссовки Nike Air Max 270', 
        price: 12990,
        imgSrc: '/src/img/sneakers/2.jpg'
    },
    {
        name : 'Мужские Кроссовки Nike Air Max 270', 
        price: 12990,
        imgSrc: '/img/sneakers/3.jpg'
    },
    {
        name : 'Мужские Кроссовки Nike Air Max 270', 
        price: 12990,
        imgSrc: '/img/sneakers/4.jpg'
    },
]

function App() {
    
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <section className="section__offer-slider offer-slider">
            <div className="container">
                <div className="offer-slider__slide slide">
                    <div className="slide__text">
                        <img className="slide__logo" src="/img/adidas-logo.png" alt="adidas-logo"></img>
                        <h2>Stan Smith
                        <span>, 
                            <br />Forever!
                        </span>
                        </h2>
                        <button className="slide__button">купить</button>
                    </div>
                    <div className="slide__image">
                        <img src="/img/green-offer.png" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
        <section className="section__sneakers sneakers">
            <div className="container">
                <div className="sneakers__top-wrap">
                    <h1 className="sneakers__title">
                      Все кроссовки
                    </h1>
                    <form action="">
                        <input type="text" className="sneakers__search" placeholder="Поиск..."></input>
                    </form>
                </div>
                <ul className="sneakers__sneakers-list">
                {sneakersArr.map( (obj) => (
                    <Card name = {obj.name} 
                        price = {obj.price}
                        imageSrc= {obj.imgSrc}
                    />) 
                    )}
                </ul>
            </div>
            
        </section>
        <section className="section__basket basket">
            <div className="basket__wrap">
                <h2 className="basket__title">Корзина</h2>
                <ul className="basket__list">
                    <li className="basket__item">
                        <div className="basket__item-wrap">
                            <img className="basket__img" src="/img/sneakers.jpg" alt="1"></img>
                            <div className="basket__text-wrap">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <div className="basket__delete-btn"></div>
                        </div>
                    </li>
                    <li className="basket__item">
                        <div className="basket__item-wrap">
                            <img className="basket__img" src="/img/sneakers.jpg" alt="1"></img>
                            <div className="basket__text-wrap">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <div className="basket__delete-btn"></div>
                        </div>
                    </li>
                </ul>
                <div className="basket__price">
                    <div className="basket__summ">
                        <p>Итого:</p>
                        <div className="dash-line"></div>
                        <b>21 498 руб.</b>
                    </div>
                    <div className="basket__tax">
                        <p>Налог:</p>
                        <div className="dash-line"></div>
                        <b>1074 руб.</b>
                    </div>
                    <a href="/order-succes.html" className="basket__btn">Оформить заказ</a>
                </div>
            </div>
        </section>
    </div>
    </div>
  );
}

export default App;
