import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import * as api from "./api";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {count: this.updateCount()};
  }

  updateCount = () => {
    api.fetchCount()
      .then(data => {
        this.setState({count: data.count.count});
    });
  };

  render() {
    return (
      <>
        <Nav count={this.state.count} />
        <Search updateCount={this.updateCount} />
        <Footer/>
      </>
    );
  }
}

export default App;
