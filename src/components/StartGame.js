import React, { Component, useState } from 'react'

export const StartGame = (props) => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
    const TMDB_API = "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate"

    const getData = () => {
        props.flipper();
        fetch ('http://files.tmdb.org/p/exports/movie_ids_04_28_2017.json.gz').then(res => res.json()).then(data => {
            var tes = data;
            console.log(data)
        })
        /*fetch(TMDB_API).then(res => res.json())            .then(data => {
                var movies = data
                console.log(movies);
            })*/
    }

    return(
        <button className='startButton' onClick={getData}>Start Game</button>
    );
}