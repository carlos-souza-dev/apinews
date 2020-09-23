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

    const [ icon, setIcon ] = useState("fa fa-bars");

    const handleSearch = (e) => {
      props.onChange(e.target.value); 
    }

   const alterIcon = () => {
    setIcon(icon == "fa fa-th" ? "fa fa-bars" : "fa fa-th")
  }

  return (
    <>
      <HeaderS themes={props.themes}>
        <nav>
            <ul>
                {urls.map((url) => (
                  <Link to={`${url.to}`}>
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
        <div onClick={props.getStyle} className="filter__display"><i onClick={alterIcon} className={`${icon}`}></i></div> 
        <div className="theme" onClick={props.getTheme} ><img src={props.iconTheme ? Moon : Sun } alt="icone do tema" /></div> 
      </HeaderS>
    </>
  );
}

export default Header;