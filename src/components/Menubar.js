import React, { useState } from 'react'
import "./styles/menubar.css"
import { NavLink } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import Menu from './Menu';

export default function Menubar() {

  const [ openMenu, setOpenMenu ] = useState(false)

  const handlemenu = (()=>{
    if(openMenu){
      setOpenMenu(false)
    }else{
      setOpenMenu(true)
    }
  })

  return (
    <div className="menubar">
      { openMenu && <Menu Close={handlemenu} />}
      <div className="menubar-container">
        <div className="menubar-admin">
          <h4>App Administration</h4>
        </div>
        <div className="menubar-contents">
            <NavLink to="/">Home</NavLink>
        </div>
        <div className="menubar-contents">
            <NavLink to="/users"> Users</NavLink>
        </div>
        <div className="menubar-contents">
            <NavLink to="/payments"> Payments</NavLink>
        </div>
        <div className="menubar-contents">
            <NavLink to="/affiliate"> Affilates</NavLink>
        </div>
      </div>
      <div className="mobile">
        <div className="title">
          <h4>App Administration</h4>
        </div>
        <div className="icon" onClick={handlemenu} >
            <h4><HiMenu /></h4>
        </div>
      </div>
    </div>
  )
}
