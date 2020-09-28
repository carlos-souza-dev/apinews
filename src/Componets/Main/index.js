import React, { useState, useEffect } from "react";

// Componentes
import { ContainerS } from './style'
import  Header  from "../Header";
import Card from "../Card";
import Footer from "../Footer";

function Main (props) {

  // const [ theme, setTheme ] = useState(true);
  const [ style, setStyle ] = useState(true);
  const [ list, setList ] = useState([]);

  useEffect(() => {
    // const currentTheme = localStorage.getItem('theme');
    const currentStyle = localStorage.getItem('style');
    const currentLikes = localStorage.getItem('likes');
    // if (currentTheme) {
    //   setTheme(currentTheme == 'true' ? true : false);
    // }
    if (currentStyle) {
      setStyle(currentStyle == 'true' ? true : false);
    }
    if (currentLikes) {
      setList(JSON.parse(currentLikes));
    }
  }, []);
  
  useEffect(() => {
    // localStorage.setItem('theme', theme)
    localStorage.setItem('style', style)
    localStorage.setItem('likes', JSON.stringify(list))
  });
  
  const getStyle = () => {
    setStyle(!style)
  }

  //  const getTheme = () => {
  //   setTheme(!theme);
  // } 
  
  const getLikes = (like) => {
    var idCard = like.target.id;
    if(list.indexOf(idCard) >= 0){
     setList(list.filter(id => id !== idCard));
    } else {
      var card = document.getElementById(idCard);
      card.classList.toggle("like");
      setList([...list, idCard]);
      localStorage.setItem('likes', JSON.stringify(list)) 
    }
  };

  // const activeTheme = (theme ?  Themes.dark : Themes.ligth);
  const activeStyle = (style ? "fa fa-bars" : "fa fa-th")
  
  console.log(props.queryApi)
  return (
    <ContainerS themes={props.activeTheme}>
      <Header
        iconStyle={activeStyle}
        getStyle={getStyle}
        iconTheme={props.iconTheme}
        getTheme={props.getTheme}
        themes={props.activeTheme}
        onSubmit={props.onSubmit}
        valueSearch={props.valueSearch}
        updateSearch={props.updateSearch}
        getStyle={getStyle}
      /> 
      { props.queryApi.length > 0 ? 
        <Card 
          list={list}
          getLikes={getLikes}
          themes={props.activeTheme}
          btnFunc={props.funcMore} 
          styleContainer={style} 
          queryApi={props.queryApi} /> :
         ""
       } 
        <Footer 
          themes={props.activeTheme}
          className={props.queryApi.length > 0 ? "" : "lot-text"} 
        />
    </ContainerS>
  );
}

export default Main;