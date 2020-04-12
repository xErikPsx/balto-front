import React from 'react';
import ErrorDog from '../../../../src/sorry404Dog.png';
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <div className="error404Page">
      <h2 className="error404Page__title">¡Ooops!</h2>
      <div className="error404Page__dogContainer">
        <img src={ErrorDog} alt="" className="error404Page__dogImage" />
      </div>
      <h3 className="error404Page__messagge">
        {' '}
        Lo sentimos, pero la página que estás buscando no la pudimos encontrar
        <span role="img" aria-label="Sad">
          {' '}
          🙁
        </span>
      </h3>
      <Link to="../" className="error404Page__link">
        Haz clic o toca aquí para volver al inicio
      </Link>
    </div>
  );
}

export default Error404Page;
