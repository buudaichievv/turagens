import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import card1 from '../src/img/card1.png'
import card2 from '../src/img/card2.png'
import card3 from '../src/img/card3.png'
import card4 from '../src/img/card4.png'
import card5 from '../src/img/card5.png'
import card6 from '../src/img/card6.png'
import reportWebVitals from './reportWebVitals';
let sections = [
  {Text:'Горящие туры'},
  {Text:'Aквапарк'},
  {Text:'Семейные туры'},
  {Text:'Молодежные туры'},
  {Text:'Свадебный тур'},
  {Text:'На праздничные даты'},
  {Text:'Раннее бронирование'},
  {Text:'Морские круизы'},
  {Text:'Комбинированные туры'}
]
let card = {
        cards:[{
        img:card1,
        text:'Майские праздники в Солнечной Анталье',
        price:'690 usd'
        },
        {
        img:card2,
        text:'Наследие Турции',
        price:'449 usd'
        },
        {
          img:card3,
          text:'Золотое Кольцо Турции 2020',
          price:'345usd'
          },
          {
            img:card4,
            text:'Пхукет | The Nature Phuket 5*',
            price:'812 usd'
            },
            {
              img:card5,
              text:'Голубые купола Узбекистана 2020',
              price:'19000 kgs'
              },
              {
                img:card6,
                text:'Пхукет | Dream Phuket Hotel Laguna 5*',
                price:'758 usd'
                },
      ],
}

ReactDOM.render(
  <React.StrictMode>
    <App card={card} sections={sections}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
