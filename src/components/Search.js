import React, { Component } from 'react';
import { MDBView, MDBAnimation } from "mdbreact";
import './Search.css';
import * as api from "../api";

class Search extends Component {

  //get matching gif from api w phrase
  getMatchingGif = (phrase) => {
    api.fetchMatchingGIF(phrase).then(data => {
      this.setState(data);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.refs.gifPhrase.value) { //search w phrase
      this.getMatchingGif(this.refs.gifPhrase.value)
    }
    else { //nothing - try again
      this.getMatchingGif('try again')
    }

    //clear
    this.refs.gifPhrase.value = '';
  };

  render() {
    return (
      <div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="text-center text-dark mb-3">Let's match you with a <span className="text-white title-text">GIF</span></h1>
            <div className="inner-form">
              <div className="input-field second-wrap">
                <input id="search"
                       type="text"
                       placeholder="Enter something..."
                       ref="gifPhrase" />
                       <small className="float-right my-text">powered by &copy; <strong>GIPHY</strong></small>
              </div>
              <div className="input-field third-wrap">
                <button className="btn-search" type="submit">
                  <svg className="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas"
                       data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="pt-5">
          <MDBAnimation type={this.state ? "fadeInUp" : console.log('no')}>
            <MDBView zoom>
              <img src={this.state ? this.state.images.downsized.url : console.log('nah')} className="gif z-depth-1" alt=""/>
            </MDBView>
          </MDBAnimation>
        </div>

        <div className="empty"></div>
      </div>
    );
  }
}

export default Search;
