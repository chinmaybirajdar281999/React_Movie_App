import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCart from './MovieCart';

const API_URL = 'http://www.omdbapi.com?apikey=9e9ab2a6';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => { 
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => { 
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>Movie Land</h1> 
      
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange = {(event) => {setSearchTerm(event.target.value)}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      
      {
        movies.length > 0 ?
          (
            <div className="container">
              {
                movies.map((movie) => 
                <MovieCart Movie={movie} />
                )
              }
            </div>
          ) : 
          (
            <div className="empty">
              <h2> No Movies Found </h2>
            </div>
          )
      }

      
    </div>
  );
}

export default App;
