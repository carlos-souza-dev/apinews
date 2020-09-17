import React, {useEffect, useState} from "react";

import Main from "../../Componets/Main";

const categorys = [ 
  {
    value: "business",
    option: "Negócios"
  },   
  {
    value: "entertainment",
    option: "Entretenimento",
  },
  {
    value: "health",
    option: "Saúde",
  },
  {
    value: "science",
    option: "Ciência",
  },
  {
    value: "sports",
    option: "Esporte",
  },
  {
    value: "technology",
    option: "Tecnologia"
  },
]

function Brasil() {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  
  const [ newsapi, setNewsapi ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('');

  useEffect( () => {
    getNewsapi();
  }, [ query ])

  const getNewsapi = async () => {
    const response = await fetch( `${BASE_API}top-headlines?${query}country=pt&from=${today}&to=${today}&apiKey=${APP_KEY}&pageSize=100`
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
      setQuery('');
    } else {
      setQuery(`q=${search}&`);
    }
    setSearch('')
  }

  return (
    <>    
      <Main
        onSubmit={getSearch}
        valueSearch={search}
        onChange={updateSearch}
        queryApi={newsapi}
        setSearch={setSearch}
        />
    </>
  );
}

export default Brasil;