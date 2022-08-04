import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
    "Title": "Superman, Spiderman or Batman",
    "Type": "movie",
    "Year": "2011",
    "imdbID": "tt2084949"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`/movies/${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon}
             alt="search"
             onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
            ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
      }


    </div>
  )

}

export default App;
