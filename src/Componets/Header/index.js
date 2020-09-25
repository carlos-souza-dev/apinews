import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { HeaderS } from "./style";
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'

// Componentes
import Button from "../Button";

const urls = [
    { to: "/", name: "Todas"},
    { to: "/top", name: "Em Alta"},
    { to: "/brasil", name: "Brasil"},
    { to: "/franca", name: "França"},
    { to: "/usa", name: "USA"}
]

function Header (props) {

  const handleSearch = (e) => {
    props.onChange(e.target.value); 
  }
  
  return (
    <>
      <HeaderS themes={props.themes}>
        <nav>
            <ul>
                {urls.map((url, indice) => (
                  <Link key={indice} to={`${url.to}`}>
                        <li>{url.name}</li>
                    </Link>
                ))}
            </ul>
        </nav>
        <form onSubmit={props.onSubmit}>
            <input  placeholder="Pesquisar" type="text" value={props.valueSearch} onChange={props.handleSearch}/>
            <Button
                themes={props.themes}  
                value={"Pesquisar"}
            />
        </form> 
        <div onClick={props.getStyle} className="filter__display"><i onClick={props.getStyle} className={`${props.iconStyle}`}></i></div> 
        <div className="theme" onClick={props.getTheme} ><img src={props.iconTheme ? Moon : Sun } alt="icone do tema" /></div> 
      </HeaderS>
    </>
  );
}

export default Header;