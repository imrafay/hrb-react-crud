import MovieCard from './MovieCard';

function MovieList({movies,onDelete,onEdit }) {
  const renderedMovies = movies.map((movie)=>{
    return <MovieCard movie={movie} onDelete={onDelete} onEdit={onEdit} key={movie.id} />;
  });

  return <div className='flex'>{renderedMovies}</div>
  }
  
  export default MovieList;
  