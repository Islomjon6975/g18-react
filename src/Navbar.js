import React from "react";
import { Button } from "./Button";
import './Navbar.css'

function Navbar(props) { // {g18:'HMLT', children: ''}
  return (
    <div className="card__container">
      Navbar, {props.children.title} {props.children.country}
      <Button bg='blue'>{props.children.price }</Button>
    </div>
  )
}

export default Navbar;