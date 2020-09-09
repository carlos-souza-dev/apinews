import React, {useEffect, useState} from "react";

import Card from "../../Componets/Card";

function Brasil() {

  const APP_KEY = "ca1ce57fdd0f40a8ba1a88403a72a809";
  const BASE_API = "https://newsapi.org/v2/";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('bitcoin');

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`${BASE_API}top-headlines?country=pt&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.articles);
  }

  return (
    <div>
      <section className="App__section">
      {recipes.map(recipe => (
        <Card 
          kkey={recipe.title}
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

export default Brasil;