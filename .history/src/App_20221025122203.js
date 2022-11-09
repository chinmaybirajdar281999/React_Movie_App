import React, {useEffect} from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=9e9ab2a6';

const App = () => {

  const searchMovies = async (title) => { 
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  }

  useEffect(() => { 
    searchMovies('spiderman')
  }, [])

  return (
    <div className="App">
      <h1>Learn React</h1> 
    </div>
  );
}

export default App;
