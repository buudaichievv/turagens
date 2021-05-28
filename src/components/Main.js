import React from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import Country from './Country/Country'
import Order from './Order/Order'
import Contact from './Contact/Contact'
import Review from './Review/Review'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainPage from './MainPage/MainPage'
export default function Main(props) {
    return (
        <BrowserRouter>
        <Header/>
        <Route exact path='/' render={()=><Order cards={props.card.cards} sections={props.sections}/>}/>
            <Route exact path='/logo' render={()=><Order cards={props.card.cards} sections={props.sections}/>}/>
            <Route exact path='/order' render={()=><MainPage/>}/>
            <Route exact path='/country' render={()=><Country country={props.country}/>}/>
            <Route exact path='/contact' render={()=><Contact/>}/>
            <Route exact path='/review' render={()=><Review post = {props.post}/>}/>
        <Footer/>
        </BrowserRouter>
    )
}

