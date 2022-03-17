import React, { Component, useState } from 'react'

export const StartGame = (props) => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
    const TMDB_API = "https://api.themoviedb.org/3/movie/550?api_key="

    const getData = () => {
        props.flipper();
        fetch(TMDB_API + API_KEY).then(res => res.json())
            .then(data => {
                console.log(data.status);
            })
    }

    return(
        <button className='startButton' onClick={getData}>Start Game</button>
    );
}