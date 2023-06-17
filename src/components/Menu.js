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
                <h4><NavLink to="/">Home</NavLink> </h4>
            </div>
            <div onClick={handleClose} className="menu-content">
                <h4><NavLink to="/users">Users</NavLink> </h4>
            </div>
            <div onClick={handleClose} className="menu-content">
                <h4><NavLink to="/payment">Payments</NavLink> </h4>
            </div>
            <div onClick={handleClose} className="menu-content">
                <h4><NavLink to="/affiliate">Affiliate</NavLink> </h4>
            </div>
        </div>
    </div>
  )
}
