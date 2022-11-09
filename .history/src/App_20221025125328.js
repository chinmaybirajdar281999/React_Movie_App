import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=9e9ab2a6';

const Movie = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => { 
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value="Spiderman"
          onChange = {() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>
      
      <div className="container">
        <div className="movie">
          <div>
            <p> {Movie.Year} </p>
          </div>

          <div>
            <img src={Movie.Poster !== 'N/A'? Movie.Poster : 'http://via.placeholder.com/400'} alt={Movie.Title} />
          </div>

          <div>
            <span> {Movie.Type} </span>
            <h3> {Movie.Title} </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
