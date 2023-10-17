//there is no difference between the js and jsx file where we create the jsx file for an componenets//
import React from 'react';

const MovieCard = ({ movie :{imdbID,Year,Poster,Title,Type } }) => {
    //Using props where just we should not repeat ourselves we can use 
    //we can structure the props that is objects of a props ---{movie1} -- as a props object which is same as the object name
      return (
        <div className='movie' key ={imdbID}>
              <div>
                <p>{Year}</p>
              </div>
              <div>
                {/*if movie1.poster is not showing the image then we have to use the ternary operator*/}
                <img src={Poster !== 'N/A' ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
              </div>
              <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
              </div>
            </div>
      );
}

export default MovieCard;