import React from 'react'
import Main from '../src/components/Main'

export default function App(props) {
  return (
    <div>
      <Main card={props.card} sections={props.sections} country={props.country} post = {props.post} adminInfo={props.adminInfo}/>
    </div>
  )
}
