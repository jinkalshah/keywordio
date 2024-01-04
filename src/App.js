import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './AllRoutes';
import Header from './components/Header';


function App() {
  return (
    <>
    <Router>
      <Header />
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
