import React, {useEffect, useState} from "react";

// import Modal from "../../Componets/Modal";
import Main from "../../Componets/Main"

function All () {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('q=*&');
  

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {

    const response = await fetch( `${BASE_API}everything?${query}apiKey=${APP_KEY}&pageSize=100`
    );
    const data = await response.json();
    setRecipes(data.articles);
  }

  const updateSearch = e => {
     setSearch(e);
  }
  
  const getSearch = e => {
    e.preventDefault();
    if(search == ''){
      setQuery('');
    } else {
      setQuery(`q=${search}&`);
    }
    setSearch('')
  }

  return (
    <div>    
      <Main
        onSubmit={getSearch}
        valueSearch={search}
        onChange={updateSearch}
        queryApi={recipes}
        setSearch={setSearch}
        />
    </div>
  );
}

export default All;
