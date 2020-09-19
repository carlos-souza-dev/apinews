import React, { useState } from "react";
import { Themes } from '../../Styles/Themes';
// Componentes
import  Header  from "../Header";
import Card from "../Card";
import Footer from "../Footer";

function Main (props) {

  const [ style, setStyle ] = useState(true);
  const [ theme, setTheme ] = useState("dark");

    const handleSearch = (e) => {
      props.onChange(e.target.value); 
    }

    const getStyle = () => {
      setStyle(!style)
   }

   const getTheme = () => {
    setTheme(theme == "dark" ? "ligth" : "dark" );
  }
  
  const currentTheme = (theme == "dark" ? Themes.ligth : Themes.dark);
  
  console.log(currentTheme)

  return (
    <>
      <Header
        themes={currentTheme}
        onSubmit={props.onSubmit}
        valueSearch={props.valueSearch}
        handleSearch={handleSearch}
        getStyle={getStyle}
      /> 
      { props.queryApi.length > 0 ? 
        <Card 
          themes={currentTheme}
          btnFunc={props.funcMore} 
          styleContainer={style} 
          queryApi={props.queryApi} /> :
         ""
       } 
        <Footer 
          themes={currentTheme}
          className={props.queryApi.length > 0 ? "" : "lot-text"} 
        />
    </>
  );
}

export default Main;