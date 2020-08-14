import React from 'react';
import './App.css';
import Search from './components/Search';
import Nav from './components/Nav';
import Footer from "./components/Footer";

class App extends React.Component {

  getCount() {
    //increment count
  }

  render() {
    return (
      <>
        <Nav/>
        <Search/>
        <Footer/>
      </>
    );
  }
}

export default App;
