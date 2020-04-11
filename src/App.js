import React from 'react';
import AppRoutes from './routes';
import "./styles/main.scss";

import Navbar from './components/Pages/Navbar/Navbar';



function App() {
  return (
    <>
        <Navbar />
        <AppRoutes />
    </>
  );
}

export default App;
