import React from 'react';
import Loader from 'react-loader-spinner';

export default function Spinner(props) {
  return (
    <div className="spinner">
      <Loader
        type="Rings"
        color="#00BFFF"
        height={props.height || 150}
        width={props.width || 150}
      />
      <h3>Cargando</h3>
    </div>
  );
}
