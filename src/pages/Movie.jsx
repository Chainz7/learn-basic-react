import React from 'react'

const Movie = ({ movie }) => {
  return (
    <>
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
    </>
  )
}

export default Movie