import { createContext, useState } from "react";

const MovieContext = createContext();

function Provider({children}){
    const [movies,setMovies] = useState([]);

    const addMovie = (title) =>{
        const newMovie = {
          title: title,
          id : Math.round(Math.random() * 9999)
        };
    
        setMovies([...movies,newMovie]);
    };
    
    const deleteMovieById = (id) =>{
       const updatedMovies = movies.filter((movie)=>{
          return movie.id !== id;
        });
        setMovies(updatedMovies);
    };
    
    const editMovieById = (id,newTitle) =>{
    
        const editedMovies = movies.map((movie)=>{
          if(movie.id === id){
           return {...movie,title:newTitle};
          }
          return movie;
         });
         setMovies(editedMovies);
    };

    const values = {
        movies,
        addMovie,
        deleteMovieById,
        editMovieById
    }

    return <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>;
}

export { Provider };
export default MovieContext;