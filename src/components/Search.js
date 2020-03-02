import React, { Component } from 'react';
import './search.css';
import * as api from "../api";

class Search extends Component {

  state = {};

  getMatchingGif = (phrase) => {
    api.fetchMatchingGIF(phrase).then(data => {
      this.setState(data);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getMatchingGif(this.refs.gifPhrase.value)
    this.refs.gifPhrase.value = '';
  };

  render() {
    return (
      <div>
        <div className="s003">
          <form onSubmit={this.handleSubmit}>
            <h1 className="text-center my-text mb-3">How are you feeling today?</h1>
            <div className="inner-form">
              <div className="input-field second-wrap">
                <input id="search"
                       type="text"
                       placeholder="I'm happy..."
                       ref="gifPhrase" />
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

        <div className="my-navbar pt-5 gif">
          <iframe
            src={this.state ? this.state.embed_url : console.log("nah")}
            width="100%" height="100%"
            frameBorder="0" className="giphy-embed">
          </iframe>
        </div>

        <div className="empty my-navbar">
        </div>

      </div>
    );
  }
}

export default Search;
