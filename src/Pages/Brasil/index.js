import React, {useEffect, useState} from "react";
import "./App.css";

import Card from "./Componets/Card";
import {Header, Navbar, Button, Form } from "./styles";

function Brasil() {

  const APP_KEY = "d501b11233134baaab897ec69639ddd8";
  const BASE_API = "https://newsapi.org/v2/";

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`${BASE_API}everything?country=us&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.articles);
    console.log(data.articles[0].url)
  }


  return (
    <div className="App">
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

export default Brasil;