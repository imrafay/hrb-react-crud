import useMovieContext from "../Hooks/useMovieContext";

function MovieCard({movie}) {
  const { deleteMovieById,editMovieById } = useMovieContext();

  const onDeleteCLick = () => {
    deleteMovieById(movie.id);
  };

  const onEditCLick = () => {
    editMovieById(movie.id,"Modified");
  };

    return (
<div className="m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img alt="random" src="https://picsum.photos/seed/picsum/200/200"/>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Title: {movie.title}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      No.{movie.id}
    </p>
    <button onClick={onEditCLick} type="button" className="m-2 focus:outline-none text-black bg-blue-200 hover:bg-blue-500 rounded-lg p-2 px-4">
      Edit
    </button>

    <button onClick={onDeleteCLick} type="button" className="m-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 rounded-lg p-2 px-4">
      Delete
    </button>

</div>

    );
  }
  
  export default MovieCard;
  