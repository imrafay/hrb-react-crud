import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";


function App() {
  const [movies,setMovies] = useState([]);

  const addEventHandle = (title) =>{
    const newMovie = {
      title: title,
      id : Math.round(Math.random() * 9999)
    };

    setMovies([...movies,newMovie]);
  };

  const deleteEventHandle = (id) =>{
   const updatedMovies = movies.filter((movie)=>{
      return movie.id !== id;
    });
    setMovies(updatedMovies);
  };

  const editEventHandle = (id,newTitle) =>{

    const editedMovies = movies.map((movie)=>{
      if(movie.id === id){
       return {...movie,title:newTitle};
      }
      return movie;
     });
     setMovies(editedMovies);
   };

  return (
    <div className="App">
      <AddMovie onSubmit={addEventHandle}/>
      <MovieList  
      movies={movies} 
      onDelete={deleteEventHandle} 
      onEdit={editEventHandle} />
    </div>
  );
}

export default App;
