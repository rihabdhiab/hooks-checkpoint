import React from "react";
import './MovieCard.css';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function MovieCard({movie}){
    return(
        <div className="movieCard">
          <Link to={`/moviedetails/${movie.id}`}>
            <h3 className="movie-title">{movie.title}</h3> 
          </Link>
            <img className="poster"  src={movie.posterURL} alt='image'/> 
            <div className="movie-details">
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