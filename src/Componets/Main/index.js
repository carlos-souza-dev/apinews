import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { variable } from "./style";

// Componentes
import  Header  from "../Header";
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

  return (
    <>
      <Header
        onSubmit={props.onSubmit}
        valueSearch={props.valueSearch}
        handleSearch={handleSearch}
        getStyle={getStyle}
      /> 
      { props.queryApi.length > 0 ? 
        <Card 
          btnFunc={props.funcMore} 
          styleContainer={style} 
          queryApi={props.queryApi} /> :
         ""
       } 
        <Footer className={props.queryApi.length > 0 ? "" : "lot-text"} ></Footer>
    </>
  );
}

export default Main;