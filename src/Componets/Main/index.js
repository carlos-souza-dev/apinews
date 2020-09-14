import React from "react";
import { Link } from 'react-router-dom';
import { Header } from "./style";
import { variable } from "./style";

// Componentes
import Button from "../Button";
import Card from "../Card";

function Main (props) {


  const handleSearch = (e) => {
      props.onChange(e.target.value);
      console.log("Main ",e)
 }


  return (
    <div>
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
        <span >{props.queryApi.length >= 5 ? `5...` : props.queryApi.length } Notícia(s)</span>
        <form onSubmit={props.onSubmit}>
            <input  placeholder="Pesquisar" type="text" value={props.valueSearch} onChange={handleSearch}/>
            <Button
                background={variable.colorbutton} 
                color={variable.background} 
                colorHover={variable.colorHover}  
                value={"Pesquisar"}/>
        </form>  
      </Header> 
      { props.queryApi.length > 0 ? 
        <Card funcMore={props.funcMore}  queryApi={props.queryApi} /> :
         "" } 
    </div>
  );
}

export default Main;