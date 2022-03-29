import React, { Component, useState } from 'react'
import Movie from './TestMovie.json'

export const StartGame = (props) => {
    const MovieName = null
    const total_pages = 500
    var rand_page =  1 + (Math.random() * (total_pages-1));
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
    const TMDB_API= "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&page="+rand_page
    const getData = () => {
        const MovieName = Movie.original_title;
        props.flipper(Movie.original_title);
        var rand_movie_number = 1 + Math.floor(Math.random() * 20); // Max movies per page is 20
        /*fetch(TMDB_API).then(res => res.json()).then(data => {
                var movie = data
                console.log(movies.results[rand_movie_number]);
            })*/
    }

    return(
        <div>
            {MovieName}
            <button className='startButton' onClick={getData}>Start Game</button>
        </div>
        
    );
}