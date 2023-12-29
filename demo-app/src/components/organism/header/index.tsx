import React from "react";
import './header.css';
import log from "../../../assets/log/logo123.png"

export const Header = () =>{
    return (
        <>
          <div className="headerContainer">
            <div className="headerText">
            <span><img className="header-log" src={log}  alt="fireSpot"/></span>
            <span className="companyTextContainer">
                <h1 className="companyText">AHAB</h1>
                <p className="sloganText">You can buy anything here...</p>
            </span>
            </div>
          <div className="navbarContainer">
            <p className="navbar-Item">home</p>
            <p className="navbar-Item">about</p>
            <p className="navbar-Item">login</p>
        </div>
          </div>  
        </>
    )
}