import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Header } from "./style";

// Componentes
import Button from "../Button";
import Card from "../Card";

function Main (props) {


  const handleSearch = (e) => {
      props.onChange(e.target.value);
      console.log("Main ",e)
 }


  return (
    <div className="Header">
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
        <span>{props.queryApi.length > 10 ? `50...` : props.queryApi.length } Notícia(s)</span>
        <form onSubmit={props.onSubmit}>
            <input type="text" value={props.valueSearch} onChange={handleSearch}/>
            <Button value={"Pesquisar"}/>
        </form>  
      </Header> 
      { props.queryApi.length > 0 ? <Card queryApi={props.queryApi} />: ""} 
    </div>
  );
}

export default Main;