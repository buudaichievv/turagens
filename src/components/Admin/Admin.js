import React,{useState} from 'react'
import './Admin.css'
export default function Admin() {
    let TableInfo = (props) =>{
        return(
            <tr key={props.id}>
                <td>{props.name}</td>
                <td>{props.country}</td>
                <td>{props.number}</td>
                <td>{props.peoples}</td>
            </tr>
        )
        
    }
        const adminArr = JSON.parse(localStorage.getItem("value"))
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Страна</th>
                        <th>Телефон</th>
                        <th>Кол-человек</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {adminArr ? 
                       adminArr.map((el)=>{
                           return(
                            <TableInfo name={el.name} country={el.country} email={el.email} number={el.number} peoples={el.kol} sms={el.sms} id={el.id}/>
                           )
                       })
                    :<div>Данных нет</div>
                   }
                </tbody>
            </table>
        </div>
    )
}
