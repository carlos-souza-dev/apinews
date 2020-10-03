import React, { useEffect, useState } from "react";

import { Themes } from "../../Styles/Themes";
import Main from "../../Componets/Main";

function All () {

  const [ newsapi, setNewsapi ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState("q=*&");
  const [ theme, setTheme ] = useState(true);
  
  useEffect( () => {
        
      const getNewsapi = async () => {
        const response = await fetch(`http://localhost:5000/api/`);
        const data = await response.json();
        setNewsapi(data.articles);
      }  
      getNewsapi();

  },[query]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme === "true" ? true : false);
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
      setQuery("q=*&");
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
        getTheme={getTheme}
        activeTheme={activeTheme}
        iconTheme={theme}
        onSubmit={getSearch}
        valueSearch={search}
        updateSearch={updateSearch}
        queryApi={newsapi}
        setSearch={setSearch}
      />
    </>
  );
}

export default All;
