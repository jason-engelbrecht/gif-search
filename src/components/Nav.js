import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBIcon} from "mdbreact";
import * as api from "../api";

class Nav extends Component {

  getCount = () => {
    api.fetchCount().then(data => {
      this.setState(data.count);
    });
  };

  render() {
    return (
      <>
        <MDBNavbar className="z-depth-0" dark transparent>
          <MDBNavbarBrand>
            <h2 className="mb-1 title-text">
              <MDBIcon icon="grin-squint-tears" size="lg" className="mr-2"/>
              <span className="text-dark">GIF</span>Match
            </h2>
          </MDBNavbarBrand>

          <ul data-test="navbar-nav" className="navbar-nav">
            <h5 className="text-white mb-0 pt-2">
              <span className="title-text"><span className="text-dark">GIF</span>MATCH</span>'s so far
            </h5>
            <h5 className="text-center count">
              {this.getCount()}{this.state ? this.state.count
              :
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>}
            </h5>
          </ul>
        </MDBNavbar>
      </>
    );
  }
}

export default Nav;
