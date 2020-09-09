import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Header } from "./style";
import Button from "../Button";

function HeaderBar() {

  const APP_KEY = "d501b11233134baaab897ec69639ddd8";
  const BASE_API = "https://newsapi.org/v2/";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('bitcoin');

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`${BASE_API}everything?q=${query}&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.articles);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }
  
  const getSearch = e => {
    e.preventDefault();
    if(search == ""){
      setQuery("bitcoin");
    } else {

      setQuery(search);
    }
    setSearch('');
  }

  const navStyle = {
      color: 'white'
  }

  return (
    <div className="Header">
      <Header>
        <nav>
            <ul>
                <Link style={navStyle} to="/">
                    <li>Todas</li>
                </Link>
                <Link style={navStyle} to="/top">
                    <li>Em Alta</li>
                </Link>
                <Link style={navStyle} to="/brasil">
                    <li>Brasil</li>
                </Link>
                <Link style={navStyle} to="/usa">
                    <li>USA</li>
                </Link>
            </ul>
        </nav>
        <form onSubmit={getSearch}>
            <input type="text" value={search} onChange={updateSearch}/>
            <Button>Enviar</Button>
        </form>  
      </Header> 
    </div>
  );
}

export default HeaderBar;