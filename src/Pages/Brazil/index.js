import React, {useEffect, useState} from "react";

import Main from "../../Componets/Main";
import { Themes } from '../../Styles/Themes';

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

  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  
  const [ newsapi, setNewsapi ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('');
  const [ theme, setTheme ] = useState(true);

  useEffect( () => {
    getNewsapi();
  }, [ query ]);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme == 'true' ? true : false);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', theme)
  });

  const getNewsapi = async () => {
    const response = await fetch( `https://newsapi.org/v2/top-headlines?${query}country=pt&from=${today}&to=${today}&apiKey=ca1ce57fdd0f40a8ba1a88403a72a809&pageSize=100`
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
        onChange={updateSearch}
        queryApi={newsapi}
        setSearch={setSearch}
        />
    </>
  );
}

export default Brasil;