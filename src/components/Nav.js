import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavbarNav} from "mdbreact";

class Nav extends Component {
  render() {
    return (
      <>
        <MDBNavbar className="z-depth-0 nav-my" dark transparent>
          <MDBNavbarBrand>
            <h2 className="mb-1 title-text">
              <MDBIcon icon="grin-squint-tears" size="lg" className="mr-2"/>
              <span className="text-dark">GIF</span>Match
            </h2>
          </MDBNavbarBrand>

          <MDBNavbarNav right>
            <h5 className="text-white mb-0 pt-2">
              <span className="title-text"><span className="text-dark">GIF</span>MATCH</span>'s so far
            </h5>
            <h5 className="text-center count">1,256,145</h5>
          </MDBNavbarNav>
        </MDBNavbar>
      </>
    );
  }
}

export default Nav;
