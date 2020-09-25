import React, {useEffect, useState} from "react";

import { Themes } from '../../Styles/Themes'
import Main from "../../Componets/Main"

function All () {

  const [ newsapi, setNewsapi ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('q=*&');
  
  useEffect( () => {
    getNewsapi();
  }, [ query ])

  const getNewsapi = async () => {
    const response = await fetch( `${process.env.REACT_APP_UNSPLASH_URL}everything?${query}apiKey=${process.env.REACT_APP_UNSPLASH_KEY}&pageSize=100`
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
