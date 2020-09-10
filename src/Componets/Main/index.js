import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Header } from "./style";

// Componentes
import Button from "../Button";
import Card from "../Card";

function Main() {

  const APP_KEY = "d501b11233134baaab897ec69639ddd8";
  const BASE_API = "https://newsapi.org/v2/";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('pt');

  useEffect( () => {
    getRecipes();
  }, [query, country])

  const getRecipes = async () => {

    const response = await fetch( `${BASE_API}top-headlines?${query}country=${country}&from=2020-09-09&to=2020-09-09&sortBy=popularity&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.articles);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
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

  const get = e => {
  }
  const getTop = e => {
    setCountry('pt')
  }
  const getBrasil = e => {
    // setUrl(`${BASE_API}top-headlines?${query}country=pt&apiKey=${APP_KEY}`)
    setCountry('pt')
  }
  const getUsa = e => {
    setCountry('us')
  }

  return (
    <div className="Header">
      <Header>
        <nav>
            <ul>
                <Link to="/">
                    <li>Todas</li>
                </Link>
                <Link onClick={getTop} to="/top">
                    <li>Em Alta</li>
                </Link>
                <Link onClick={getBrasil} to="/brasil">
                    <li>Brasil</li>
                </Link>
                <Link onClick={getUsa} to="/usa">
                    <li>USA</li>
                </Link>
            </ul>
        </nav>
        {/* <span>{recipes.length} Nóticia(s)</span> */}
        <form onSubmit={getSearch}>
            <input type="text" value={search} onChange={updateSearch}/>
            <Button>Enviar</Button>
        </form>  
      </Header> 
      <Card queryApi={recipes} />
    </div>
  );
}

export default Main;