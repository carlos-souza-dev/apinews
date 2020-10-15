import React, { useState, useEffect } from "react";
import axios from "axios";
// Componentes
import { ContainerS } from "./style"
import  Header  from "../Header";
import Card from "../Card";
import Footer from "../Footer";

function Main (props) {

  const [ style, setStyle ] = useState(true);
  const [ list, setList ] = useState([]);
  const [ input, setInput ] = useState('');
  const [ query, setQuery ] = useState([]);
  
  const queryFunction = () => {
    setQuery([])
    let inputLower = input.toLowerCase;
    let inputUper = input.toUpperCase;
    let inputFirts = input.slice(0,1).toUpperCase() + input.slice(1, input.length);
    const newQuery = [];

    props.queryApi.forEach(news => {
      if(news.title.indexOf(inputLower) >= 0 
        || news.title.indexOf(inputUper) >= 0
        || news.title.indexOf(inputFirts) >= 0){
          newQuery.push(news)
        }
      });
      setQuery(newQuery)
    console.log(query)
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    const currentStyle = localStorage.getItem("style");
    const currentLikes = localStorage.getItem("likes");
    if (currentStyle) {
      setStyle(currentStyle === "true" ? true : false);
    }
    if (currentLikes) {
      setList(JSON.parse(currentLikes));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("style", style)
    localStorage.setItem("likes", JSON.stringify(list))
  });
  
  const getStyle = () => {
    setStyle(!style)
  }

  const activeStyle = (style ? "fa fa-bars" : "fa fa-th")
  
  const getLikes = (like) => {
    var idCard = like.target.id;
    if(list.indexOf(idCard) >= 0){
     setList(list.filter(id => id !== idCard));
    } else {
      var card = document.getElementById(idCard);
      card.classList.toggle("like");
      setList([...list, idCard]);
      localStorage.setItem("likes", JSON.stringify(list)) 
    }
  };
  
  return (
    <ContainerS themes={props.activeTheme}>
      <Header
        iconStyle={activeStyle}
        getStyle={getStyle}
        iconTheme={props.iconTheme}
        getTheme={props.getTheme}
        themes={props.activeTheme}
        onSubmit={props.onSubmit}
        handleInput={handleInput}
        queryFunction={queryFunction}
        input={input}
      /> 
      { props.queryApi.length > 0 || query.length > 0 ? 
        <Card 
          list={list}
          getLikes={getLikes}
          themes={props.activeTheme}
          btnFunc={props.funcMore} 
          styleContainer={style} 
          queryApi={query.length > 0 ? query : props.queryApi} /> :
         ""
       } 
        <Footer 
          themes={props.activeTheme} 
        />
    </ContainerS>
  );
}

export default Main;