import React, {useEffect, useState} from "react";

import { Themes } from '../../Styles/Themes'
import Main from "../../Componets/Main"

function All () {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const [ newsapi, setNewsapi ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('q=*&');
  

  useEffect( () => {
    getNewsapi();
  }, [ query ])

  const getNewsapi = async () => {

    const response = await fetch( `${BASE_API}everything?${query}apiKey=${APP_KEY}&pageSize=100`
    );
    const data = await response.json();
    setNewsapi(data.articles);
  }

  const updateSearch = e => {
     setSearch(e);
  }
  
  const getSearch = e => {
    e.preventDefault();
    if(search == ''){
      setQuery('q=*&');
    } else {
      setQuery(`q=${search}&`);
    }
    setSearch('')
  }

  return (
    <>    
      <Main
        themes={Themes.dark}
        onSubmit={getSearch}
        valueSearch={search}
        onChange={updateSearch}
        queryApi={newsapi}
        setSearch={setSearch}
        />
    </>
  );
}

export default All;
