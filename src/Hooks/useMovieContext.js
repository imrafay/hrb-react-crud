import { useContext } from "react";
import  MovieContext  from "../Context/Movies";

function useMovieContext(){
    return useContext(MovieContext);
  }

export default useMovieContext;
