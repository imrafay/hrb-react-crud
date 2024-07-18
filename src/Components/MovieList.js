import MovieCard from './MovieCard';
import useMovieContext from "../Hooks/useMovieContext";

function MovieList() {
  const { movies } = useMovieContext();

  const renderedMovies = movies.map((movie)=>{
    return <MovieCard movie={movie} key={movie.id} />;
  });

  return <div className='flex'>{renderedMovies}</div>
  }
  
  export default MovieList;
  