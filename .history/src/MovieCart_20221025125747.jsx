import React from 'react'

const MovieCart = ({Movie}) => {
  return (
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
  )
}

export default MovieCart
