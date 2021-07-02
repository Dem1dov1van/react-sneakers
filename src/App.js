// import logo from './logo.svg';
import './App.css';

import adidasLogo from '../src/img/adidas-logo.png'
import frog from '../src/img/green-offer.png'

import Card from './components/Card'
import Header from './components/Header';

const sneakersArr = [
    {
        name : 'Мужские Кроссовки Nike Blazer Mid Suede', 
        price: 12990,
        imgSrc: require('./img/sneakers/1.jpg').default
    },
    {
        name : 'Мужские Кроссовки Nike Air Max 270', 
        price: 12990,
        imgSrc: require('./img/sneakers/2.jpg').default
    },
    {
        name : 'Мужские Кроссовки Nike Blazer Mid Suede', 
        price: 12990,
        imgSrc: require('./img/sneakers/3.jpg').default
    },
    {
        name : 'Кроссовки Puma X Aka Boku Future Rider', 
        price: 12990,
        imgSrc: require('./img/sneakers/4.jpg').default
    },
    {
        name : 'Мужские Кроссовки Under Armour Curry 8', 
        price: 12990,
        imgSrc: require('./img/sneakers/5.jpg').default
    },
    {
        name : 'Мужские Кроссовки Nike Kyrie 7', 
        price: 12990,
        imgSrc: require('./img/sneakers/6.jpg').default
    },
    {
        name : 'Мужские Кроссовки Jordan Air Jordan 11', 
        price: 12990,
        imgSrc: require('./img/sneakers/7.jpg').default
    },
    {
        name : 'Мужские Кроссовки Nike LeBron XVIII', 
        price: 12990,
        imgSrc: require('./img/sneakers/8.jpg').default
    },
    {
        name : 'Мужские Кроссовки Nike Lebron XVIII Low', 
        price: 12990,
        imgSrc: require('./img/sneakers/9.jpg').default
    },
    {
        name : 'Мужские Кроссовки Nike Kyrie Flytrap IV', 
        price: 12990,
        imgSrc: require('./img/sneakers/10.jpg').default
    },
]
sneakersArr.map(item => {console.log(item.imgSrc);})

function App() {
    const addSneakers = (name) => {
        alert(name)
    }
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <section className="section__offer-slider offer-slider">
            <div className="container">
                <div className="offer-slider__slide slide">
                    <div className="slide__text">
                        <img className="slide__logo" src={adidasLogo} alt="adidasLogo"/>
                        <h2>Stan Smith
                        <span>, 
                            <br />Forever!
                        </span>
                        </h2>
                        <button className="slide__button">купить</button>
                    </div>
                    <div className="slide__image">
                        <img src={frog} alt="frog"/>
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
                        <input type="text" className="sneakers__search" placeholder="Поиск..."/>
                    </form>
                </div>
                <ul className="sneakers__sneakers-list">
                {sneakersArr.map( (obj, i) => (
                    <Card name = {obj.name} 
                        price = {obj.price}
                        imageSrc= {obj.imgSrc}
                        key = {i}
                        onAddClick = {addSneakers}
                    /> 
                    
                ))}
                </ul>
                
            </div>
            
        </section>
        <section className="section__basket basket">
            <div className="basket__wrap">
                <h2 className="basket__title">Корзина</h2>
                <ul className="basket__list">
                    <li className="basket__item">
                        <div className="basket__item-wrap">
                            <img className="basket__img" src="/img/sneakers.jpg" alt="sneakers"/>
                            <div className="basket__text-wrap">
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <div className="basket__delete-btn"></div>
                        </div>
                    </li>
                    <li className="basket__item">
                        <div className="basket__item-wrap">
                            <img className="basket__img" src="/img/sneakers.jpg" alt="sneakers"/>
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
