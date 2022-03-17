import React, { Component, useState} from 'react'

export const MainCard = (props) => {
    
    const styleTran = {
      transform: 'rotateY('+props.flip+'deg)',
      boxShadow: props.shadow+'px 10px 10px 2px rgba(0, 0, 0, 0.3)'
    };

    return(
        <div className='movieCard' style={styleTran}>
              <div className='frontCard'>
                Guess the Movie
              </div>
              <div className='backCard'>
                Movie
              </div>
        </div>
          
    );
}