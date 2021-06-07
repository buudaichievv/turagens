import React,{useState} from 'react'
import './MainPage.css'
import { Button,Alert} from 'react-bootstrap';
import { addInfo } from '../../state';
export default function MainPage() {
    const [show, setShow] = useState(false);
    const [count ,setCount] = useState(0)
    let name_tx = React.createRef()
    let country_tx = React.createRef()
    let number_tx = React.createRef()
    let kol_tx = React.createRef()

    const addAdminInfo = () =>{
      let name_ = name_tx.current.value
      let country_ = country_tx.current.value
      let number_ = number_tx.current.value
      let kol_ = kol_tx.current.value
      let id_ = count
      
      addInfo(name_,country_,number_,kol_,id_)

      name_tx.current.value = ""
      country_tx.current.value = ""
      number_tx.current.value = ""
      kol_tx.current.value = ""
    }
    return (
        <div>
           <div className="container">
           <Alert show={show} variant="success" className="Alert">
              <Alert.Heading>Удачного полета!</Alert.Heading>
              <Button onClick={() => setShow(false)} className="Alert_btn">×</Button>
            </Alert>
            <div className="MainPage">
            <input type="text" className="MainPage_input" placeholder="ФИО" ref={name_tx}/>
            <input type="text" className="MainPage_input" placeholder="Страна отправления" ref={country_tx}/>
            <input type="number" className="MainPage_input" placeholder="Телефон" ref={number_tx}/>
            <span>Количество человек</span>
            <select name="" id="" className="MainPage_input" ref={kol_tx}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10+">10+</option>
            </select>
        
            <button className="MainPage_btn" onClick={() =>{
            setShow(true)
            setCount(count + 1)
            addAdminInfo()
            }} variant="outline-success">Заказать</button>
        </div>
        </div>
    </div>
    )
}
