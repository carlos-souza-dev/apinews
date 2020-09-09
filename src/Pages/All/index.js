import React, {useEffect, useState} from "react";

import Card  from "../../Componets/Card";
import Modal from "../../Componets/Modal";

function All () {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('bitcoin');
  // const []

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`${BASE_API}everything?q=bitcoin&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.articles);
    console.log(data.articles[2])
  }



  return (
    <div>    
      <section className="App__section">
      {recipes.map(recipe => (
        <Card 
          key={recipe.title}
          title={recipe.title}
          author={recipe.author}
          image={recipe.urlToImage}  
          description={recipe.description}
          content={recipe.content}
          url={recipe.url} />
      ))}
      </section>
    </div>
  );
}

export default All;