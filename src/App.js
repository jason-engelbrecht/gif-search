import React from 'react';
import './App.css';
import Search from './components/Search';
import Nav from './components/Nav';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav/>
      <Search/>
      <Footer/>
    </>
  );
};

export default App;
