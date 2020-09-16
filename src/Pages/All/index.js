import React, {useEffect, useState} from "react";

// import Modal from "../../Componets/Modal";
import Main from "../../Componets/Main"

const language = [  
  {
    value: "de",
    option: "Alemão",
  },
  {
    value: "en",
    option: "Inglês",
  },
  {
    value: "es",
    option: "Espanhol",
  },
  {
    value: "fr",
    option: "Francês",
  },
  {
    value: "it",
    option: "Italiano",
  },
  {
    value: "nl",
    option: "Holandês",
  },
];

function All () {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const [ newsapi, setNewsapi ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('q=*&');
  const [ idiom, setIdiom ] = useState('pt');
  

  useEffect( () => {
    getNewsapi();
  }, [query, idiom])

  const getNewsapi = async () => {

    const response = await fetch( `${BASE_API}everything?${query}language=${idiom}&apiKey=${APP_KEY}&pageSize=100`
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
      console.log("Vázio")
    } else {
      setQuery(`q=${search}&`);
    }
    setSearch('')
  }

  const getIdiom = (e) => {
    setIdiom(e)
  }

  return (
    <>    
      <Main
        filterTitle={["Filtrar por idioma", "Português"]}
        filter={language}
        onSubmit={getSearch}
        getFilter={getIdiom}
        valueSearch={search}
        onChange={updateSearch}
        queryApi={newsapi}
        setSearch={setSearch}
        />
    </>
  );
}

export default All;
