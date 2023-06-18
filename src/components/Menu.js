import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiCloseFill } from "react-icons/ri";

export default function Menu({Close}) {
    const handleClose = (()=>{
        Close()
    })
  return (
    <div className="menu">
        <div onClick={handleClose}  className="close-icon">
            <h4><RiCloseFill /></h4>
        </div>
        <div className="menu-container">
            <div onClick={handleClose} className="menu-content">
                <NavLink to="/"> <h4>Home</h4></NavLink>
            </div>
            <div onClick={handleClose} className="menu-content">
                <NavLink to="/users"> <h4>Users</h4> </NavLink>
            </div>
            <div onClick={handleClose} className="menu-content">
                <NavLink to="/payments"> <h4>Payments</h4></NavLink>
            </div>
            <div onClick={handleClose} className="menu-content">
                <NavLink to="/affiliate"> <h4>Affiliate</h4> </NavLink>
            </div>
        </div>
    </div>
  )
}
