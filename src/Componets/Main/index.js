import React, { useState, useEffect } from "react";
import axios from "axios";
// Componentes
import { ContainerS } from "./style"
import  Header  from "../Header";
import Card from "../Card";
import Footer from "../Footer";

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;


function Main (props) {

  const [ style, setStyle ] = useState(true);
  const [ list, setList ] = useState([]);
  const [ input, setInput ] = useState('');
  const [ query, setQuery ] = useState([]);
  
  const queryFunc = async () => {
    setQuery( await axios.get(`${process.env.REACT_APP_UNSPLASH_URL}top-headlines?q=${input}&country=pt&from=${today}&to=${today}&apiKey=${process.env.REACT_APP_UNSPLASH_KEY}&pageSize=100`).then(res => {
        console.log("Response",res)
        return res.data.articles
      }))
    // const response = await fetch(`${process.env.REACT_APP_UNSPLASH_URL}top-headlines?q=${input}&country=pt&from=${today}&to=${today}&apiKey=${process.env.REACT_APP_UNSPLASH_KEY}&pageSize=100`);
    //   const data = await response.json();
    //   console.log("RESPONSE",data)
    //   setQuery(data.articles);
    };

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    // axios.post(`${props.url}/search`, {
    //   text: input,      
    // });
  };

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
        queryFunc={queryFunc}
        input={input}
        handleSubmit={handleSubmit}
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
          className={props.queryApi.length > 0 ? "" : "lot-text"} 
        />
    </ContainerS>
  );
}

export default Main;