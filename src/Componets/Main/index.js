import React, { useState, useEffect } from "react";
import { Themes } from '../../Styles/Themes';
// Componentes
import  Header  from "../Header";
import Card from "../Card";
import Footer from "../Footer";
import { getDefaultNormalizer } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function Main (props) {


  const [ style, setStyle ] = useState(true);
  const [ theme, setTheme ] = useState(true);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme == 'true' ? true : false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme)
  });

  const handleSearch = (e) => {
    props.onChange(e.target.value); 
  }

  
  const getStyle = () => {
    setStyle(!style)
  }

   const getTheme = () => {
    setTheme(!theme);
  } 

  const activeTheme = (theme ?  Themes.dark : Themes.ligth);
  
  return (
    <>
      <Header
        iconTheme={theme}
        getTheme={getTheme}
        themes={activeTheme}
        onSubmit={props.onSubmit}
        valueSearch={props.valueSearch}
        handleSearch={handleSearch}
        getStyle={getStyle}
      /> 
      { props.queryApi.length > 0 ? 
        <Card 
          themes={activeTheme}
          btnFunc={props.funcMore} 
          styleContainer={style} 
          queryApi={props.queryApi} /> :
         ""
       } 
        <Footer 
          themes={activeTheme}
          className={props.queryApi.length > 0 ? "" : "lot-text"} 
        />
    </>
  );
}

export default Main;