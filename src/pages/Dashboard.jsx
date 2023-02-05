import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Movie from './Movie'
import './pages.css'

const Dashboard = () => {
  const [counter, setCounter] = useState()
  const [movies, setMovies] = useState()

  // First Time Render
  useEffect(() => {
    return () => {
      setCounter(100)
    }
  }, [])
  
  const API_URL = 'http://omdbapi.com?apikey=c032e2d7'

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className='container'>
        <div className='list'>
            <div className='card'>
                <div className='card-container'>
                    <h3>
                        <Card name="Jade Blue" />
                    </h3>
                    <Card rarity="5" />
                    <Card price="2000$" />
                </div>
                <div className='card-container'>
                    <h3>
                        <Card name="Jade Red" />
                    </h3>
                    <Card rarity="4" />
                    <Card price="1000$" />
                </div>
                <div className='card-container'>
                    <h3>
                        <Card name="Jade Green" />
                    </h3>
                    <Card rarity="6" />
                    <Card price="5000$" />
                </div>
            </div>
            <div className='income'>
                <div className='income-container'>
                    <h3>All Item Price</h3>
                    <h2>{counter}</h2>
                    <div className='income-btn'>
                        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>min</button>
                        <button onClick={() => setCounter((nextCount) => nextCount + 1)}>plus</button>
                    </div>
                </div>
            </div>
            <div className='film'>
                <div className='film-container'>
                    {
                        movies?.length > 0
                         ? (
                            <h3>
                                {movies.map((movie) => (
                                    <Movie movie={movie} />
                                ))}
                            </h3>
                         ) : (
                            <h3>No Movies Found</h3>
                         )
                    }
                </div>
            </div>
        </div>
    </div>

  )
}

export default Dashboard