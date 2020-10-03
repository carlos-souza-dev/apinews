const dataApi = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ca1ce57fdd0f40a8ba1a88403a72a809`
    );
    const data = await response.json();
    setResponseApi(data.articles);
    console.log(data.articles)
}

// REACT_APP_UNSPLASH_URL=https://newsapi.org/v2/
// REACT_APP_UNSPLASH_KEY=ca1ce57fdd0f40a8ba1a88403a72a809

module.exports = dataApi;
console.log(dataApi)