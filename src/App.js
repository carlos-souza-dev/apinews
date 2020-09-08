import React, {useEffect, useState} from "react";
import "./App.css";

import Card from "./Componets/Card";
import {Header, Navbar, Button, Form } from "./styles";

function App() {

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
    console.log(data.articles[0].url)
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

  return (
    <div className="App">
      <Header>
        <Navbar>
            <ul>
                <li><a href="#">Em Alta</a></li>
                <li><a href="#">Todas</a></li>
                <li><a href="#">Brasil</a></li>
                <li><a href="#">USA</a></li>
            </ul>
        </Navbar>
        <Form onSubmit={getSearch}>
            <input type="text" value={search} onChange={updateSearch}/>
            <Button>Enviar</Button>
        </Form>  
      </Header>     
      <section className="App__section">
      {recipes.map(recipe => (
        <Card 
          key={recipe.title}
          title={recipe.title}
          image={recipe.urlToImage}  
          description={recipe.description}
          url={recipe.url} />
      ))}
      </section>
    </div>
  );
}

export default App;