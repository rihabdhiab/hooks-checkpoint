import React from "react";
import './MovieDetails.css';
import {useParams,useNavigate} from 'react-router-dom'
function MovieDetails({moviesInfo}){
    const {id}=useParams();
    let navigate=useNavigate();
    return(
        <div className="movieDetails">
           { moviesInfo.filter(movie=>movie.id==id).map((movie,index)=>(
               <div className="details-container"  key={index} >
                   <h3 className="title" >{movie.title}</h3> 
                   <iframe className="trailer" width="700" height="400" src={movie.trailer} title="YouTube video player" 
                   frameborder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   <h4 className="rate"> Rate : {movie.Rating}</h4>
                   <p className="description"> <span className="description-span">Description : </span> <br/> {movie.description} </p>
                   
                   
                    <button className="button" onClick={() => navigate('/')}>Home </button>
               </div>
           ))}

        </div>
    )
}
export default MovieDetails;