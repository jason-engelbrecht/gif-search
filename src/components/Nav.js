import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBIcon} from "mdbreact";

class Nav extends Component {

  render() {
    return (
      <>
        <MDBNavbar className="z-depth-0" dark transparent>
          <MDBNavbarBrand>
            <h2 className="mb-1 title-text nav-title">
              <MDBIcon icon="grin-squint-tears" size="lg" className="mr-2"/>
              <span className="text-dark">GIF</span>Match
            </h2>
          </MDBNavbarBrand>

          <ul data-test="navbar-nav" className="navbar-nav">
            <h5 className="text-white mb-0 pt-2 counter-title">
              <span className="title-text "><span className="text-dark">GIF</span>MATCH</span>'s so far
            </h5>
            <h5 className="text-center count">
              {this.props.count ? this.props.count
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
