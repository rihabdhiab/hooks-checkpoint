import React from "react";
import './MovieCard.css';
import ReactStars from "react-rating-stars-component";
function MovieCard({movie}){
    return(
        <div className="movieCard">
            <img className="poster"  src={movie.posterURL} alt='image'/> 
            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3> 
              <div className="description">
                <p>{movie.description}</p>
                <h5>Rate :</h5> 
                  <ReactStars 
                    count={10}
                    edit={false}
                    value={movie.Rating}
                    size={24}
                    activeColor="#ffd700"
                    isHalf='true'/>  
            </div>  
          </div> 
        </div>
    ) 
}

export default MovieCard;