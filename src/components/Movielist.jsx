import React from 'react';
import { Link } from "react-router-dom"

function Movielist( {datas , title} )
{
    return(
    <div className='movies-list'>
     <h1> { title } </h1>   
     {
        datas.map( (movie)=>{ 
          return(
                    <Link to={`/moviedetail${movie.id}`}>
                      <div className="movie">
                              <img src={movie.poster}  />
                              <h1> {movie.movieName} </h1>
                      </div>
                    </Link>
                )})
     }
    </div>
    )
}

export default Movielist 