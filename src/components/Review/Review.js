
import React from 'react';
import { addPost } from '../../state';
import './Review.css'
export default function Review(props) {
  let textPost = React.createRef()
  const OnAddReview = () =>{
    let text = textPost.current.value
    addPost(text)
    textPost.current.value = ""
  }
let ReviewAdd = (props) =>{
  return(
    <div className="user">
           <img src={props.user} alt="" className="user_img"/>
          <p className="user_text">{props.comment}</p>
    </div>
  )
}
  return (
    <div className='root'>
       <div className="yellow_block"><h2>ОТЗЫВЫ</h2></div>
       <div className="container">
       <div className="userWrapper">
         {
           props.post.map((el,index)=>{
             return(
                <ReviewAdd user = {el.img} comment = {el.comment}/>
             )
           })
         }
       </div>
       <input type="text" className="root_input" placeholder="Добавить отзыв"  ref={textPost} />
       <button className="root_btn" onClick = {OnAddReview}>добавить</button>
    </div>
    </div>
  );
}