import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Header } from "./style";
import { variable } from "./style";

// Componentes
import Button from "../Button";
import Card from "../Card";
import Footer from "../Footer";

function Main (props) {

  const [ style, setStyle ] = useState(true);
  const [ icon, setIcon ] = useState("fa fa-bars");
  const [ disabled, setDisabled] = useState(true);

    const handleSearch = (e) => {
      props.onChange(e.target.value); 
    }

    const getStyle = () => {
      setStyle(!style)
   }

   const alterIcon = () => {
    setIcon(icon == "fa fa-th" ? "fa fa-bars" : "fa fa-th")
  }

  return (
    <>
      <Header>
        <nav>
            <ul>
                <Link to="/">
                    <li>Todas</li>
                </Link>
                <Link to="/top">
                    <li>Em Alta</li>
                </Link>
                <Link to="/brasil">
                    <li>Brasil</li>
                </Link>
                <Link to="/franca">
                    <li>Franca</li>
                </Link>
                <Link to="/usa">
                    <li>USA</li>
                </Link>
            </ul>
        </nav>
        <form onSubmit={props.onSubmit}>
            <input  placeholder="Pesquisar" type="text" value={props.valueSearch} onChange={handleSearch}/>
            <Button
                background={variable.colorbutton} 
                color={variable.background} 
                colorHover={variable.colorHover}  
                value={"Pesquisar"}/>
        </form> 
        <div onClick={props.getStyle} className="filter__display"><i onClick={alterIcon} className={`${icon}`}></i></div> 
      </Header>
      { props.queryApi.length > 0 ? 
        <Card 
          btnFunc={props.funcMore} 
          styleContainer={style} 
          queryApi={props.queryApi} /> :
         ""
       } 
        <Footer></Footer>
    </>
  );
}

export default Main;