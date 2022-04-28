import React from "react";
import ReactStars from "react-rating-stars-component";
import './SearchBar.css';

function SearchBar({setRate,setSearchInput,handleShow}){

    const ratingChanged = (newRating) => {
        setRate(newRating);
      };

      const handleChange=(e)=>{
          setSearchInput(e.target.value);
      };
     

    return(
        <div className='searchBar'>
          <input className="search-input"
           type='text'
           placeholder='search movie here.....'
           onChange={handleChange}/>
          <ReactStars
           count={10}
           onChange={ratingChanged}
           size={34}
           activeColor="#ffd700"
           isHalf='true'
          />
          <button className="add-button" onClick={handleShow} >Add Movie</button>
        </div>
    )
}
export default SearchBar;

