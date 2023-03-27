import { useEffect, useState } from 'react';
// import { createConnection } from './chat.js';
import axios from 'axios';
const api_key = 'a0a7e40dc8162ed7e37aa2fc97db5654';

const useFetchMovies = () => {
  const [movies, setMovies] = useState(['ssssssssssss']);
  const [moviesLoadingError, setMoviesLoadingError] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://www.themoviedb.org/movie?api_key=` +
          api_key +
          '&sort_by=popularity.desc'
      )
      .then((response) => {
        debugger
        // Do something if call succeeded
        setMovies(response);
        // console.log(response);
      })
      .catch((error) => {
        // Do something if call failed
        setMoviesLoadingError('An error occured while fetching movies.');
        // console.log(error);
      });
  }, [movies]);

  return { movies, moviesLoadingError };
};

function Movies() {
  const { movies, movieLoadingError } = useFetchMovies();

  return (
    <div>
      <table>
        <tbody>
          {movies.map((film) => (
            <tr key={film.email}>
              <td>{film.}</td>
              <td>{film.firstname}</td>
              <td>{film.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {movieLoadingError !== null && (
        <div className="movies-loading-error">{movieLoadingError}</div>
      )}
    </div>
  );
}

export default Movies;
