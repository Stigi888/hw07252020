import React from 'react'
import './App.css';


export default function CountButton(props) {
  const send = () => {
    props.updateCounter(props.value + props.count)
  }

  return (
           <button className={"btn"} onClick={send}>{props.value}</button>
  );
}


