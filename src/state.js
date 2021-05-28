import card1 from '../src/img/card1.png'
import card2 from '../src/img/card2.png'
import card3 from '../src/img/card3.png'
import card4 from '../src/img/card4.png'
import card5 from '../src/img/card5.png'
import card6 from '../src/img/card6.png'

import ctr1 from '../src/img/ctr1.png'
import ctr2 from '../src/img/ctr2.png'
import ctr3 from '../src/img/ctr3.png'
import ctr4 from '../src/img/ctr4.png'
import ctr5 from '../src/img/ctr5.png'
import ctr6 from '../src/img/ctr6.png'
import ctr7 from '../src/img/ctr7.png'
import ctr8 from '../src/img/ctr8.png'
import ctr9 from '../src/img/ctr9.png'
import ctr10 from '../src/img/ctr10.png'
import ctr11 from '../src/img/ctr11.png'
import ctr12 from '../src/img/ctr12.png'

import flag1 from '../src/img/flag1.png'
import flag2 from '../src/img/flag2.png'
import flag3 from '../src/img/flag3.png'
import flag4 from '../src/img/flag4.png'
import flag5 from '../src/img/flag5.png'
import flag6 from '../src/img/flag6.png'
import flag7 from '../src/img/flag7.png'
import flag8 from '../src/img/flag8.png'
import flag9 from '../src/img/flag9.png'
import flag10 from '../src/img/flag10.png'
import flag11 from '../src/img/flag11.png'
import flag12 from '../src/img/flag12.png'

import ava from '../src/img/user.png'
import { renderEntireTree } from './render'
let store = {
        post:[
            {  
                comment:'Самая лучшая компания по тур поездкам на мой вгляд',
                img:ava
              },
              {  
                comment:'уже 3 раза покупаю у них билет и не о чем не жалею',
                img:ava
              },
              {  
                comment:'все понравилось. Спасибо вам',
                img:ava
              },
              {  
                comment:'не ожидала что будет всё так хорошо',
                img:ava,
              },
              {  
                comment:'всё понравилось но слишком долго добирались до пляжа',
                img:ava
              },
              {  
                comment:'мне и детям очень понравилось',
                img:ava
              },
              {  
                comment:'номера шик',
                img:ava
              }, {  
                comment:'Хоршо отдохнул. Cпасибо вам',
                img:ava
              }
            ],
            newPostText:'',
        sections:[
            {Text:'Горящие туры'},
            {Text:'Aквапарк'},
            {Text:'Семейные туры'},
            {Text:'Молодежные туры'},
            {Text:'Свадебный тур'},
            {Text:'На праздничные даты'},
            {Text:'Раннее бронирование'},
            {Text:'Морские круизы'},
            {Text:'Комбинированные туры'}
          ],
        card:{
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
          },
          country:[
            {
              img:ctr1,
              text:'турция',
              flag:flag1
            },
            {
              img:ctr2,
              text:'турция',
              flag:flag2
            },
            {
              img:ctr3,
              text:'турция',
              flag:flag3
            },
            {
              img:ctr4,
              text:'турция',
              flag:flag4
            },
            {
              img:ctr5,
              text:'турция',
              flag:flag5
            },
            {
              img:ctr6,
              text:'турция',
              flag:flag6
            },
            {
              img:ctr7,
              text:'турция',
              flag:flag7
            },
            {
              img:ctr8,
              text:'турция',
              flag:flag8
            },
            {
              img:ctr9,
              text:'турция',
              flag:flag9
            },
            {
              img:ctr10,
              text:'турция',
              flag:flag10
            },
            {
              img:ctr11,
              text:'турция',
              flag:flag11
            },
            {
              img:ctr12,
              text:'турция',
              flag:flag12
            },
          ]
}
export let addPost = (text)=>{
    let newPostReview = {
        img:ava,
        comment:text
    };
    store.post.push(newPostReview)
    renderEntireTree(store)
} 
export default store;