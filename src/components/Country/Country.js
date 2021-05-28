import React from 'react'
import globus from '../../img/globus.jpg'
import './Country.css'
export default function Country(props) {
let Flag = (props) =>{
    return(

            <div className="country_card">
                <div className="bg"></div>
                <img src={props.img} alt="" className="country_card_img"/>
                <p className="country_card_name">{props.name}</p>
                <img src={props.flag} alt="" className="country_card_flag"/>
            </div>
    )
}
    return (
        <>
        <img className="country_globus_img" src={globus} alt="" />
        <h2 className="country_globus_text">СТРАНЫ</h2>
        <div className='container'>
           <div className="country_search_wrapper">
               <p className='country_search_text'>Популярные страны куда летят чаще всего </p>
               <input type="text" className="country_search_input" placeholder="найти страну"/>
           </div>
           <div className="country">
        {
            props.country.map((el,index)=>{
                return(
                    <Flag img={el.img} name={el.text} flag={el.flag}/>
                )
            })
        }
            </div>
        </div>
        </>
        
    )
}

