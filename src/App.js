import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
//5c4d2da0 //
import './App.css';
import SearchIcon from './search.png'


const api_url='http://www.omdbapi.com/?i=tt3896198&apikey=5c4d2da0';


const App = () => {

  const [searchTerm,setSearchTerm] =useState( " ");
    const [movies,setMovies] = useState ([]);

    useEffect (() => {
      searchMovies ('Batman');
     },[]);


    const searchMovies = async (title) => {
      const response = await fetch (`${api_url} &s=${title}`);
      const data = await response.json();

     setMovies(data.Search);
      //.Search is used to see in the console about searching the movies named spiderman//
    };

   
    return(
      <div className='app'>
        <h1>MovieSpace </h1>

        <div className='search'>
            <input 
            value ={searchTerm}
                   
            placeholder='search for movies' 
            /*this is an static value where we want dyanamic value so we use onChange //
              value = 'Superman' */
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
               src={SearchIcon} 
               alt='search' 
               onClick={() => searchMovies(searchTerm)}
            />
        </div>
        {movies?.length > 0 ?(
            <div className='container'>
            
            {movies.map ( (movie) => (
                <MovieCard movie ={movie} />
            ))}
           </div>
          ) :(
            <div className='empty'>
              <h2> no movies found</h2>
              </div>
             )
        }
      </div>
    );
}

export default App ;
