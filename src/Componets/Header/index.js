import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderS } from "./style";
import Moon from "../../assets/moon.png"
import Sun from "../../assets/sun.png"
 
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

const [ menu, setMenu ] = useState(false);

const handleSearch = (e) => {
  props.updateSearch(e.target.value); 
}

const getMenu = () => {
  setMenu(!menu)
}

 return (
    <>
      <HeaderS themes={props.themes} menu={menu}>
        <div className="menu" onClick={getMenu} >
          <div className="menu__hamburger"></div>
          <span className="menu__hamburger-is"></span>
        </div>
        <nav className="menu__nav">
            
            <ul>
                {urls.map((url, indice) => (
                  <Link key={indice} to={`${url.to}`}>
                        <li>{url.name}</li>
                    </Link>
                ))}
            </ul>
        </nav>
        <form className="from-search" onSubmit={props.onSubmit}>
            <input className="search-input" placeholder="Pesquisar" type="text" value={props.valueSearch} onChange={handleSearch}/>
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