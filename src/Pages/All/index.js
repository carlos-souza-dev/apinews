import React, {useEffect, useState} from "react";

import Modal from "../../Componets/Modal";
import Main from "../../Componets/Main"

function All () {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}pageSize=50`;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('q=*&');
  const [limit, setLimit] = useState('10');
  

  useEffect( () => {
    getRecipes();
  }, [query, limit])

  const getRecipes = async () => {

    const response = await fetch( `${BASE_API}everything?${query}apiKey=${APP_KEY}&pageSize=50`
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

  console.log(recipes)

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
