import React, {useEffect, useState} from "react";
import Main from "../../Componets/Main";
import { Themes } from "../../Styles/Themes";

function Brasil() {
  
  const [ newsapi, setNewsapi ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState("");
  const [ theme, setTheme ] = useState(true);
  const [ url, setUrl ] = useState(
    window.location.hostname.includes('localhost')
      ? `http://localhost:5000/api/brasil`
      : `https://react-apinews.herokuapp.com/api/brasil`
  )
  
  useEffect( () => {

    const getNewsapi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setNewsapi(data.articles);
    }
    getNewsapi();
    
  }, [ query ]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme ==="true" ? true : false);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("theme", theme)
  });

  const updateSearch = e => {
     setSearch(e);
  }
  
  const getSearch = e => {
    e.preventDefault();
    if(search === ""){
      setQuery("");
    } else {
      setQuery(`q=${search}&`);
    }
    setSearch("")
  }

  const getTheme = () => {
    setTheme(!theme);
  } 

  const activeTheme = (theme ?  Themes.dark : Themes.ligth);
  
  return (
    <>    
      <Main
        url={url} 
        getTheme={getTheme}
        activeTheme={activeTheme}
        iconTheme={theme}
        onSubmit={getSearch}
        valueSearch={search}
        updateSearch={updateSearch}
        queryApi={newsapi}
        />
    </>
  );
}

export default Brasil;