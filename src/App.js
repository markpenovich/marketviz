import { useEffect } from 'react';

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
  const searchMovies = async (title) => {
    const response = await fetch(`/movies/${title}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies"
               value="Superman"
               onChange={() => {}}
        />
        <img src={SearchIcon}
             alt="search"
             onClick={() => {}}
        />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  )

}

export default App;
