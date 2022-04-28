import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'

 function MovieList ({moviesInfo, searchInput,rate}){
  
  const filtredMovies=moviesInfo.filter(movie=>(movie.title.toLowerCase().includes(searchInput.toLowerCase()))&& movie.Rating>=rate)
   
    
    return (
    
        <div className="movieList">
            {
        filtredMovies.map((movie,index) =>{
           return <MovieCard  key={index} movie={movie} />
          } )
          }
         
        </div>)
    
};

export default MovieList;



