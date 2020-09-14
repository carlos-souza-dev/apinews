import React from "react";
import { Link } from 'react-router-dom';
import { Header } from "./style";
import { variable } from "./style";

// Componentes
import Button from "../Button";
import Card from "../Card";
import Footer from "../Footer";
import Filter from "../Filter";

function Main (props) {


    const handleSearch = (e) => {
      props.onChange(e.target.value);
      console.log("Main ",e)
    }

    console.log(props.queryApi.length)

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
        <form onSubmit={props.onSubmit}>
            <input  placeholder="Pesquisar" type="text" value={props.valueSearch} onChange={handleSearch}/>
            <Button
                background={variable.colorbutton} 
                color={variable.background} 
                colorHover={variable.colorHover}  
                value={"Pesquisar"}/>
        </form>  
      </Header>
      <Filter/>
      { props.queryApi.length > 0 ? 
        <Card funcMore={props.funcMore}  queryApi={props.queryApi} /> :
         "" } 
        <Footer></Footer>
    </div>
  );
}

export default Main;