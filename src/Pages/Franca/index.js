import React, {useEffect, useState} from "react";

import Main from "../../Componets/Main";


function Usa () {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('country=fr');
  

  useEffect( () => {
    getRecipes();
  }, [query, country])

  const getRecipes = async () => {

    const response = await fetch( `${BASE_API}top-headlines?${query}${country}&from=${today}&to=${today}&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.articles);
  }

  const updateSearch = e => {
     setSearch(e);
     console.log("Estou no Search", search)
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

export default Usa;